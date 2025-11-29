import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { SkillsRepository } from '../infrastructure/skills.repository';
import { SystemsRepository } from '../../systems/infrastracture/system.repository';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from '../domain/skill.entity';

@Injectable()
export class SkillsService {
  constructor(
    private readonly repo: SkillsRepository,
    private readonly systemsRepo: SystemsRepository,
  ) {}

  async listBySystem(systemId: number): Promise<Skill[]> {
    return this.repo.findAllBySystem(systemId);
  }

  async findById(id: number, systemId?: number): Promise<Skill> {
    const skill = await this.repo.findOneById(id, systemId);
    if (!skill) throw new NotFoundException('Skill not found');
    return skill;
  }

  async create(dto: CreateSkillDto, systemId: number): Promise<Skill> {
    if (dto.systemId !== systemId) throw new ForbiddenException('System ID mismatch');
    return this.repo.createAndSave(dto);
  }

  async update(id: number, systemId: number, dto: UpdateSkillDto): Promise<Skill> {
    const existing = await this.repo.findOneById(id, systemId);
    if (!existing) throw new NotFoundException('Skill not found');

    if (dto.systemId && dto.systemId !== existing.systemId) {
      throw new ForbiddenException('Only owner can move skill to target system');
    }

    const updated = await this.repo.updateById(id, dto);
    return updated as Skill;
  }

  async remove(id: number, systemId: number): Promise<void> {
    const existing = await this.repo.findOneById(id, systemId);
    if (!existing) throw new NotFoundException('Skill not found');
    await this.repo.removeById(id);
  }
}
