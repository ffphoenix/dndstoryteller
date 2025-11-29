import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from '../domain/skill.entity';

@Injectable()
export class SkillsRepository {
  constructor(
    @InjectRepository(Skill)
    private readonly repo: Repository<Skill>,
  ) {}

  createAndSave(data: Partial<Skill>): Promise<Skill> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  findOneById(id: number, systemId?: number): Promise<Skill | null> {
    return this.repo.findOne({ where: { id, systemId: systemId } });
  }

  findAllBySystem(systemId: number): Promise<Skill[]> {
    return this.repo.find({ where: { systemId: systemId }, order: { id: 'ASC' } });
  }

  async updateById(id: number, data: Partial<Skill>): Promise<Skill | null> {
    await this.repo.update(id, data);
    return this.findOneById(id);
  }

  async removeById(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
