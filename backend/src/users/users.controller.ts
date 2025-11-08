import { Controller, Get, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { ApiResponse  } from '@nestjs/swagger';
import { ErrorResponse } from '../common/interfaces/errorResponse.interface';
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

  @Get('test')
  getTest(): string {
    return 'this.appService.getHello()';
  }
}
