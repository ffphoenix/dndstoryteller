import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateStatDto {
  @ApiProperty({ description: 'Stat name' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @ApiPropertyOptional({ description: 'Stat description' })
  @IsOptional()
  @IsString()
  description?: string | null;

  @ApiPropertyOptional({ description: 'Hidden from non-owners', default: false })
  @IsOptional()
  @IsBoolean()
  is_hidden?: boolean;

  @ApiProperty({ description: 'Related system id' })
  @IsInt()
  system_id: number;
}
