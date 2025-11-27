import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { System } from '../../systems/domain/system.entity';

@Entity({ name: 'stats' })
export class Stat {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty({ description: 'Stat name' })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ description: 'Stat name short name' })
  @Column({ type: 'varchar', length: 3 })
  shortName: string;

  @ApiProperty({ description: 'Stat description', required: false })
  @Column({ type: 'text', nullable: true })
  description: string | null;

  @ApiProperty({ description: 'Hidden from non-owners', default: false })
  @Column({ type: 'boolean', default: false })
  isHidden: boolean;

  @ApiProperty({ description: 'Order of appearance in the stats list' })
  @Column({ type: 'smallint', default: '0' })
  order: number;

  @ManyToOne(() => System, { onDelete: 'CASCADE' })
  system?: System;

  @ApiProperty({ description: 'Related system id' })
  systemId: number;
}
