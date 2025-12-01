import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ForeignKey, PrimaryGeneratedColumn } from 'typeorm';
import { System } from '../../systems/domain/system.entity';

@Entity({ name: 'system_stats' })
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
  displayOrder: number;

  @ApiProperty({ description: 'Related system id' })
  @Column({ type: 'integer', nullable: false })
  @ForeignKey(() => System)
  systemId: number;
}
