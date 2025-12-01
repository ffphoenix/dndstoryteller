import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { SpellsRepository } from '../infrastructure/spells.repository';
import { SystemsRepository } from '../../systems/infrastracture/system.repository';
import { CreateSpellDto } from './dto/create-spell.dto';
import { UpdateSpellDto } from './dto/update-spell.dto';
import { Spell } from '../domain/spell.entity';

@Injectable()
export class SpellsService {
  constructor(
    private readonly repo: SpellsRepository,
    private readonly systemsRepo: SystemsRepository,
  ) {}

  async listBySystem(systemId: number): Promise<Spell[]> {
    return this.repo.findAllBySystem(systemId);
  }

  async findById(id: number, systemId?: number): Promise<Spell> {
    const spell = await this.repo.findOneById(id, systemId);
    if (!spell) throw new NotFoundException('Spell not found');
    return spell;
  }

  async create(dto: CreateSpellDto, systemId: number): Promise<Spell> {
    if (dto.systemId !== systemId) throw new ForbiddenException('System ID mismatch');
    return this.repo.createAndSave(dto);
  }

  async update(id: number, systemId: number, dto: UpdateSpellDto): Promise<Spell> {
    const existing = await this.repo.findOneById(id, systemId);
    if (!existing) throw new NotFoundException('Spell not found');

    if (dto.systemId && dto.systemId !== existing.systemId) {
      throw new ForbiddenException('Only owner can move spell to target system');
    }

    const updated = await this.repo.updateById(id, dto);
    return updated as Spell;
  }

  async remove(id: number, systemId: number): Promise<void> {
    const existing = await this.repo.findOneById(id, systemId);
    if (!existing) throw new NotFoundException('Spell not found');
    await this.repo.removeById(id);
  }
}
