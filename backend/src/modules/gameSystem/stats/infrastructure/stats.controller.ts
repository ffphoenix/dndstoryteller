import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { StatsService } from '../application/stats.service';
import { CreateStatDto } from '../application/dto/create-stat.dto';
import { UpdateStatDto } from '../application/dto/update-stat.dto';
import { Stat } from '../domain/stat.entity';
import { SystemAccessibleGuard } from '../../systems/application/guards/system.accessible.guard';
import { SystemOwnerGuard } from '../../systems/application/guards/system.owner.guard';

@ApiTags('stats')
@UseGuards(JwtAuthGuard)
@UseGuards(SystemAccessibleGuard)
@Controller('systems/:systemId/stats')
class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: Stat, isArray: true })
  async list(@Param('systemId', ParseIntPipe) systemId: number): Promise<Stat[]> {
    return this.statsService.listBySystem(systemId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: Stat })
  async getOne(@Param('id', ParseIntPipe) id: number, @Param('systemId', ParseIntPipe) systemId: number): Promise<Stat> {
    return this.statsService.findById(id, systemId);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(SystemOwnerGuard)
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: HttpStatus.CREATED, type: Stat })
  async create(@Body() dto: CreateStatDto, @Param('systemId', ParseIntPipe) systemId: number): Promise<Stat> {
    return this.statsService.create(dto, systemId);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(SystemOwnerGuard)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: Stat })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Param('systemId', ParseIntPipe) systemId: number,
    @Body() dto: UpdateStatDto,
  ): Promise<Stat> {
    return this.statsService.update(id, dto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(SystemOwnerGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number, @Param('systemId', ParseIntPipe) systemId: number): Promise<void> {
    return this.statsService.remove(id);
  }
}

export default StatsController;
