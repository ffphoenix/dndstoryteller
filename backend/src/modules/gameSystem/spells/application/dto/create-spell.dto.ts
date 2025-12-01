import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateSpellDto {
  @ApiProperty({ description: 'Spell name' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @ApiPropertyOptional({ description: 'Spell description' })
  @IsOptional()
  @IsString()
  description?: string | null;

  @ApiPropertyOptional({ description: 'Magic school' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  school?: string | null;

  @ApiPropertyOptional({ description: 'Magic subschool' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  subschool?: string | null;

  @ApiPropertyOptional({ description: 'Spell level' })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  level?: string | null;

  @ApiPropertyOptional({ description: 'Spell range' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  range?: string | null;

  @ApiPropertyOptional({ description: 'Spell duration' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  duration?: string | null;

  @ApiProperty({ description: 'Related system id' })
  @IsInt()
  systemId: number;
}
