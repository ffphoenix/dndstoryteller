import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../auth/guards/jwt-auth.guard';
import { SpellsService } from '../application/spells.service';
import { CreateSpellDto } from '../application/dto/create-spell.dto';
import { UpdateSpellDto } from '../application/dto/update-spell.dto';
import { Spell } from '../domain/spell.entity';
import { SystemAccessibleGuard } from '../../shared/application/guards/system.accessible.guard';
import { SystemOwnerGuard } from '../../shared/application/guards/system.owner.guard';
import { CRUDErrorBadRequestResponse } from '../../../../common/interfaces/formValidationExceptionResponse.interface';

@ApiTags('spells')
@UseGuards(JwtAuthGuard)
@Controller('systems/:systemId/spells')
class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @UseGuards(SystemAccessibleGuard)
  @ApiResponse({ status: HttpStatus.OK, type: Spell, isArray: true })
  async list(@Param('systemId', ParseIntPipe) systemId: number): Promise<Spell[]> {
    return this.spellsService.listBySystem(systemId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(SystemAccessibleGuard)
  @ApiResponse({ status: HttpStatus.OK, type: Spell })
  async getOne(@Param('id', ParseIntPipe) id: number, @Param('systemId', ParseIntPipe) systemId: number): Promise<Spell> {
    return this.spellsService.findById(id, systemId);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(SystemOwnerGuard)
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: HttpStatus.CREATED, type: Spell })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: CRUDErrorBadRequestResponse })
  async create(@Body() dto: CreateSpellDto, @Param('systemId', ParseIntPipe) systemId: number): Promise<Spell> {
    return this.spellsService.create(dto, systemId);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(SystemOwnerGuard)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: Spell })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: CRUDErrorBadRequestResponse })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Param('systemId', ParseIntPipe) systemId: number,
    @Body() dto: UpdateSpellDto,
  ): Promise<Spell> {
    return this.spellsService.update(id, systemId, dto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(SystemOwnerGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number, @Param('systemId', ParseIntPipe) systemId: number): Promise<void> {
    return this.spellsService.remove(id, systemId);
  }
}

export default SpellsController;
