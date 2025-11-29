import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './domain/skill.entity';
import { SkillsRepository } from './infrastructure/skills.repository';
import { SkillsService } from './application/skills.service';
import SkillsController from './infrastructure/skills.controller';
import { System } from '../systems/domain/system.entity';
import { SystemsRepository } from '../systems/infrastracture/system.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Skill, System])],
  controllers: [SkillsController],
  providers: [SkillsRepository, SystemsRepository, SkillsService],
  exports: [SkillsService],
})
export class SkillsModule {}
