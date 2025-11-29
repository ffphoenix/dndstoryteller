import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty({ description: 'Skill name' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @ApiPropertyOptional({ description: 'Skill description' })
  @IsOptional()
  @IsString()
  description?: string | null;

  @ApiPropertyOptional({ description: 'What check is required' })
  @IsOptional()
  @IsString()
  check?: string | null;

  @ApiPropertyOptional({ description: 'Action details' })
  @IsOptional()
  @IsString()
  action?: string | null;

  @ApiPropertyOptional({ description: 'Try again details' })
  @IsOptional()
  @IsString()
  tryAgain?: string | null;

  @ApiProperty({ description: 'Related system id' })
  @IsInt()
  systemId: number;
}
