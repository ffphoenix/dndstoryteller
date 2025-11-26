import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { StatsRepository } from '../infrastructure/stats.repository';
import { SystemsRepository } from '../../systems/infrastracture/system.repository';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { Stat } from '../domain/stat.entity';

@Injectable()
export class StatsService {
  constructor(
    private readonly repo: StatsRepository,
    private readonly systemsRepo: SystemsRepository,
  ) {}

  async listBySystem(systemId: number): Promise<Stat[]> {
    return this.repo.findAllBySystem(systemId);
  }

  async findById(id: number, systemId?: number): Promise<Stat> {
    const stat = await this.repo.findOneById(id, systemId);
    if (!stat) throw new NotFoundException('Stat not found');

    return stat;
  }

  async create(dto: CreateStatDto, systemId: number): Promise<Stat> {
    if (dto.system_id !== systemId) throw new ForbiddenException('System ID mismatch');
    return this.repo.createAndSave(dto);
  }

  async update(id: number, dto: UpdateStatDto): Promise<Stat> {
    const existing = await this.repo.findOneById(id);
    if (!existing) throw new NotFoundException('Stat not found');

    // Prevent moving to another system by non-owner; even owner we restrict to same system for simplicity
    if (dto.system_id && dto.system_id !== existing.system_id) {
      throw new ForbiddenException('Only owner can move stat to target system');
    }

    const updated = await this.repo.updateById(id, dto);
    return updated as Stat;
  }

  async remove(id: number): Promise<void> {
    const existing = await this.repo.findOneById(id);
    if (!existing) throw new NotFoundException('Stat not found');

    await this.repo.removeById(id);
  }
}
