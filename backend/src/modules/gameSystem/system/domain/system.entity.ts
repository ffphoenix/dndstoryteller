import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../users/user.entity';

@Entity({ name: 'systems' })
export class System {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty({ description: 'System name' })
  @Index()
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ description: 'System description', required: false })
  @Column({ type: 'text', nullable: true })
  description: string | null;

  @ApiProperty({ description: 'Owner user id' })
  @Index()
  @Column({ type: 'int' })
  user_id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user?: User;

  @ApiProperty({ description: 'Is system public', default: false })
  @Index()
  @Column({ type: 'boolean', default: false })
  is_public: boolean;

  @ApiProperty({ description: 'Image URL', required: false })
  @Column({ type: 'varchar', length: 255, nullable: true })
  image_url: string | null;
}
