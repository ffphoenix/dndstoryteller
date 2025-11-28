import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stat } from '../domain/stat.entity';

@Injectable()
export class StatsRepository {
  constructor(
    @InjectRepository(Stat)
    private readonly repo: Repository<Stat>,
  ) {}

  createAndSave(data: Partial<Stat>): Promise<Stat> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  findOneById(id: number, systemId?: number): Promise<Stat | null> {
    return this.repo.findOne({ where: { id, systemId: systemId } });
  }

  findAllBySystem(systemId: number): Promise<Stat[]> {
    return this.repo.find({ where: { systemId: systemId }, order: { displayOrder: 'ASC' } });
  }

  findVisibleBySystem(systemId: number): Promise<Stat[]> {
    return this.repo.find({ where: { systemId: systemId, isHidden: false }, order: { id: 'DESC' } });
  }

  async updateById(id: number, data: Partial<Stat>): Promise<Stat | null> {
    await this.repo.update(id, data);
    return this.findOneById(id);
  }

  async removeById(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
