import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ForeignKey, PrimaryGeneratedColumn } from 'typeorm';
import { System } from '../../systems/domain/system.entity';

@Entity({ name: 'system_skills' })
export class Skill {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty({ description: 'Skill name' })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ description: 'Skill description', required: false })
  @Column({ type: 'text' })
  description: string | null;

  @ApiProperty({ description: 'What check is required', required: false })
  @Column({ type: 'text', nullable: true })
  check: string | null;

  @ApiProperty({ description: 'Action details', required: false })
  @Column({ type: 'text', nullable: true })
  action: string | null;

  @ApiProperty({ description: 'Try again details', required: false })
  @Column({ type: 'text', nullable: true })
  tryAgain: string | null;

  @ApiProperty({ description: 'Related system id' })
  @Column({ type: 'integer', nullable: false })
  @ForeignKey(() => System)
  systemId: number;
}
