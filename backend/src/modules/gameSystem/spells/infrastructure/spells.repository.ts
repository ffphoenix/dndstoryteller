import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Spell } from '../domain/spell.entity';

@Injectable()
export class SpellsRepository {
  constructor(
    @InjectRepository(Spell)
    private readonly repo: Repository<Spell>,
  ) {}

  createAndSave(data: Partial<Spell>): Promise<Spell> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  findOneById(id: number, systemId?: number): Promise<Spell | null> {
    return this.repo.findOne({ where: { id, systemId: systemId } });
  }

  findAllBySystem(systemId: number): Promise<Spell[]> {
    return this.repo.find({ where: { systemId: systemId }, order: { id: 'ASC' } });
  }

  async updateById(id: number, data: Partial<Spell>): Promise<Spell | null> {
    await this.repo.update(id, data);
    return this.findOneById(id);
  }

  async removeById(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
