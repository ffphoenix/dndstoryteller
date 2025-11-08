import { Controller, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ErrorResponse } from '../common/interfaces/errorResponse.interface';
import { GoogleLoginDto } from './dto/google-login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('google/login')
  @ApiOperation({ summary: 'Login with Google' })
  @ApiBody({ type: GoogleLoginDto })
  @ApiResponse({ status: HttpStatus.OK, description: 'Login successful' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse })
  async googleLogin(@Body() body: GoogleLoginDto) {
    try {
      // Extract the ID token from the credential response
      const idToken = body.credentialResponse?.credential;

      if (!idToken) {
        throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
      }

      // Validate the Google token
      const profile = await this.authService.validateGoogleToken(idToken);
      console.log(profile);
      if (!profile) {
        throw new HttpException('Invalid Google token', HttpStatus.UNAUTHORIZED);
      }

      // Find or create the user
      const user = await this.authService.findOrCreateUser(profile);
      console.log(user);
      // Generate JWT token
      return this.authService.generateToken(user);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Authentication failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}