import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { SystemsRepository } from '../infrastracture/system.repository';
import { CreateSystemDto } from './dto/create-system.dto';
import { UpdateSystemDto } from './dto/update-system.dto';
import { System } from '../domain/system.entity';

@Injectable()
export class SystemsService {
  constructor(private readonly repo: SystemsRepository) {}

  async create(dto: CreateSystemDto, ownerId: number): Promise<System> {
    return this.repo.createAndSave({ ...dto, user_id: ownerId });
  }

  async findAllPublicOrOwned(userId?: number): Promise<System[]> {
    return this.repo.findPublicOrOwned(userId);
  }

  async findVisibleById(id: number, userId?: number): Promise<System> {
    const sys = await this.repo.findOneById(id);
    if (!sys) throw new NotFoundException('System not found');
    if (!sys.is_public && sys.user_id !== userId) {
      throw new ForbiddenException('You do not have access to this system');
    }
    return sys;
  }

  async update(id: number, dto: UpdateSystemDto, userId: number): Promise<System> {
    const sys = await this.repo.findOneById(id);
    if (!sys) throw new NotFoundException('System not found');
    if (sys.user_id !== userId) throw new ForbiddenException('Only owner can update system');
    const updated = await this.repo.updateById(id, dto);
    return updated as System;
  }

  async remove(id: number, userId: number): Promise<void> {
    const sys = await this.repo.findOneById(id);
    if (!sys) throw new NotFoundException('System not found');
    if (sys.user_id !== userId) throw new ForbiddenException('Only owner can delete system');
    await this.repo.removeById(id);
  }
}
