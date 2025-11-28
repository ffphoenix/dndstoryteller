import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { System } from '../domain/system.entity';

@Injectable()
export class SystemsRepository {
  constructor(
    @InjectRepository(System)
    private readonly repo: Repository<System>,
  ) {}

  createAndSave(data: Partial<System>): Promise<System> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  findPublicOrOwned(userId?: number): Promise<System[]> {
    return this.repo.find({
      where: [{ isPublic: true }, { userId: userId }],
      order: { id: 'DESC' },
    });
  }

  findOneById(id: number): Promise<System | null> {
    return this.repo.findOne({ where: { id } });
  }

  async updateById(id: number, data: Partial<System>): Promise<System | null> {
    await this.repo.update(id, data);
    return this.findOneById(id);
  }

  async removeById(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
