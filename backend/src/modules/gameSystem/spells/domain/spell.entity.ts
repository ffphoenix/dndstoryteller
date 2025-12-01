import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ForeignKey, PrimaryGeneratedColumn } from 'typeorm';
import { System } from '../../systems/domain/system.entity';

@Entity({ name: 'system_spells' })
export class Spell {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty({ description: 'Spell name' })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ description: 'Spell description', required: false })
  @Column({ type: 'text', nullable: true })
  description: string | null;

  @ApiProperty({ description: 'Magic school', required: false })
  @Column({ type: 'varchar', length: 255, nullable: true })
  school: string | null;

  @ApiProperty({ description: 'Magic subschool', required: false })
  @Column({ type: 'varchar', length: 255, nullable: true })
  subschool: string | null;

  @ApiProperty({ description: 'Spell level', required: false })
  @Column({ type: 'varchar', length: 50, nullable: true })
  level: string | null;

  @ApiProperty({ description: 'Spell range', required: false })
  @Column({ type: 'varchar', length: 255, nullable: true })
  range: string | null;

  @ApiProperty({ description: 'Spell duration', required: false })
  @Column({ type: 'varchar', length: 255, nullable: true })
  duration: string | null;

  @ApiProperty({ description: 'Related system id' })
  @Column({ type: 'integer', nullable: false })
  @ForeignKey(() => System)
  systemId: number;
}
