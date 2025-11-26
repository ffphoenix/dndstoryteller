import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { System } from './domain/system.entity';
import { SystemsRepository } from './infrastracture/system.repository';
import { SystemsService } from './application/systems.service';
import { SystemsController } from './infrastracture/systems.controller';

@Module({
  imports: [TypeOrmModule.forFeature([System])],
  controllers: [SystemsController],
  providers: [SystemsRepository, SystemsService],
  exports: [SystemsService],
})
export class SystemsModule {}
