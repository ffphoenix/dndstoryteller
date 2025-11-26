import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stat } from './domain/stat.entity';
import { StatsRepository } from './infrastructure/stats.repository';
import { StatsService } from './application/stats.service';
import StatsController from './infrastructure/stats.controller';
import { System } from '../systems/domain/system.entity';
import { SystemsRepository } from '../systems/infrastracture/system.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Stat, System])],
  controllers: [StatsController],
  providers: [StatsRepository, SystemsRepository, StatsService],
  exports: [StatsService],
})
export class StatsModule {}
