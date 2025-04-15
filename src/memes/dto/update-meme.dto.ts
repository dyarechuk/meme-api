import {
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Max,
  Min,
} from 'class-validator';

export class UpdateMemeDto {
  @IsString()
  @IsOptional()
  @Length(3, 100)
  name?: string;

  @IsUrl()
  @IsOptional()
  image?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(99)
  likes?: number;
}
