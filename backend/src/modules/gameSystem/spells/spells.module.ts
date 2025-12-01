import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spell } from './domain/spell.entity';
import { SpellsRepository } from './infrastructure/spells.repository';
import { SpellsService } from './application/spells.service';
import SpellsController from './infrastructure/spells.controller';
import { System } from '../systems/domain/system.entity';
import { SystemsRepository } from '../systems/infrastracture/system.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Spell, System])],
  controllers: [SpellsController],
  providers: [SpellsRepository, SystemsRepository, SpellsService],
  exports: [SpellsService],
})
export class SpellsModule {}
