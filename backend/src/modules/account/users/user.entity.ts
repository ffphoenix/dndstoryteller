import { Entity, Column, PrimaryGeneratedColumn, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export type AuthProvider = 'local' | 'google';
export type UserRole = 'admin' | 'user';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Index({ unique: true })
  @Column()
  email: string;

  // Nullable for OAuth users
  @ApiProperty({ required: false })
  @Column({ nullable: true })
  password: string | null;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  firstName: string | null;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  lastName: string | null;

  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({ enum: ['admin', 'user'], default: 'user' })
  @Column({ type: 'varchar', default: 'user' })
  role: UserRole;

  // OAuth-specific fields
  @ApiProperty({ required: false, description: 'Google account ID (sub)' })
  @Index()
  @Column({ type: 'varchar', nullable: true })
  googleId: string | null;

  @ApiProperty({ required: false })
  @Column({ type: 'varchar', nullable: true })
  pictureUrl: string | null;

  @ApiProperty({ enum: ['local', 'google'], required: false })
  @Column({ type: 'varchar', default: 'local' })
  provider: AuthProvider;

  @ApiProperty()
  @Column({ type: 'varchar', default: '' })
  refreshToken: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  public updatedAt: Date;
}
