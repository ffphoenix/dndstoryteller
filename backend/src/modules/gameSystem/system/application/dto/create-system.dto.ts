import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateSystemDto {
  @ApiProperty({ description: 'System name', example: 'Home made DnD System 5e' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name!: string;

  @ApiProperty({ description: 'System description', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Public visibility', default: false, required: false })
  @IsOptional()
  @IsBoolean()
  is_public?: boolean;

  @ApiProperty({ description: 'Image URL', required: false })
  @IsOptional()
  @IsUrl()
  image_url?: string;
}
