import { Controller, Get, HttpCode, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { ApiResponse, ApiBearerAuth  } from '@nestjs/swagger';
import { ErrorResponse } from '../common/interfaces/errorResponse.interface';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/user.decorator';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, description: 'Ok', type: User, isArray: true})
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request', type: ErrorResponse})
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse})
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse})
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, description: 'Returns current authenticated user', type: User})
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: ErrorResponse})
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal server error', type: ErrorResponse})
  async getCurrentUser(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
