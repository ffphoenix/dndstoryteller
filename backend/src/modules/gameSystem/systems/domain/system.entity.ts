import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ForeignKey, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../account/users/user.entity';

@Entity({ name: 'systems' })
export class System {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty({ description: 'System name' })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ description: 'System description', required: false })
  @Column({ type: 'text', nullable: true })
  description: string | null;

  @ApiProperty({ description: 'Is system public', default: false })
  @Column({ type: 'boolean', default: false })
  isPublic: boolean;

  @ApiProperty({ description: 'Image URL', required: false })
  @Column({ type: 'varchar', length: 255, nullable: true })
  imageUrl: string | null;

  @ApiProperty({ description: 'Owner user id' })
  @Column({ type: 'integer', nullable: false })
  @ForeignKey(() => User)
  userId: number;
}
