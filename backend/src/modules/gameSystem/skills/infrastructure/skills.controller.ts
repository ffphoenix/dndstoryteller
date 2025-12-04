import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../account/auth/guards/jwt-auth.guard';
import { SkillsService } from '../application/skills.service';
import { CreateSkillDto } from '../application/dto/create-skill.dto';
import { UpdateSkillDto } from '../application/dto/update-skill.dto';
import { Skill } from '../domain/skill.entity';
import { SystemAccessibleGuard } from '../../shared/application/guards/system.accessible.guard';
import { SystemOwnerGuard } from '../../shared/application/guards/system.owner.guard';
import { CRUDErrorBadRequestResponse } from '../../../../common/interfaces/formValidationExceptionResponse.interface';

@ApiTags('skills')
@UseGuards(JwtAuthGuard)
@Controller('systems/:systemId/skills')
class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  @UseGuards(SystemAccessibleGuard)
  @ApiResponse({ status: HttpStatus.OK, type: Skill, isArray: true })
  async list(@Param('systemId', ParseIntPipe) systemId: number): Promise<Skill[]> {
    return this.skillsService.listBySystem(systemId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(SystemAccessibleGuard)
  @ApiResponse({ status: HttpStatus.OK, type: Skill })
  async getOne(@Param('id', ParseIntPipe) id: number, @Param('systemId', ParseIntPipe) systemId: number): Promise<Skill> {
    return this.skillsService.findById(id, systemId);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(SystemOwnerGuard)
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: HttpStatus.CREATED, type: Skill })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: CRUDErrorBadRequestResponse })
  async create(@Body() dto: CreateSkillDto, @Param('systemId', ParseIntPipe) systemId: number): Promise<Skill> {
    return this.skillsService.create(dto, systemId);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(SystemOwnerGuard)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, type: Skill })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: CRUDErrorBadRequestResponse })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Param('systemId', ParseIntPipe) systemId: number,
    @Body() dto: UpdateSkillDto,
  ): Promise<Skill> {
    return this.skillsService.update(id, systemId, dto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(SystemOwnerGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number, @Param('systemId', ParseIntPipe) systemId: number): Promise<void> {
    return this.skillsService.remove(id, systemId);
  }
}

export default SkillsController;
