import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../../../../common/decorators/user.decorator';
import { User } from '../../../users/user.entity';
import { SystemsService } from '../application/systems.service';
import { CreateSystemDto } from '../application/dto/create-system.dto';
import { UpdateSystemDto } from '../application/dto/update-system.dto';
import { System } from '../domain/system.entity';

@ApiTags('systems')
@Controller('systems')
export class SystemsController {
  constructor(private readonly systemsService: SystemsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: System, isArray: true })
  async list(@CurrentUser() user?: User): Promise<System[]> {
    const userId = user?.id;
    return this.systemsService.findAllPublicAndOwned(userId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: System })
  async getOne(@Param('id', ParseIntPipe) id: number, @CurrentUser() user?: User): Promise<System> {
    return this.systemsService.findVisibleById(id, user?.id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: HttpStatus.CREATED, type: System })
  async create(@Body() dto: CreateSystemDto, @CurrentUser() user: User): Promise<System> {
    return this.systemsService.create(dto, user.id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: System })
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSystemDto, @CurrentUser() user: User): Promise<System> {
    return this.systemsService.update(id, dto, user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: User): Promise<void> {
    return this.systemsService.remove(id, user.id);
  }
}
