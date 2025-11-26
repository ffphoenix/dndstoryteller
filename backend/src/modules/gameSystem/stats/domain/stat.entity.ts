import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { System } from '../../systems/domain/system.entity';

@Entity({ name: 'stats' })
export class Stat {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty({ description: 'Stat name' })
  @Index()
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ description: 'Stat description', required: false })
  @Column({ type: 'text', nullable: true })
  description: string | null;

  @ApiProperty({ description: 'Hidden from non-owners', default: false })
  @Index()
  @Column({ type: 'boolean', default: false })
  is_hidden: boolean;

  @ApiProperty({ description: 'Related system id' })
  @Index()
  @Column({ type: 'int' })
  system_id: number;

  @ManyToOne(() => System, { onDelete: 'CASCADE' })
  system?: System;
}
