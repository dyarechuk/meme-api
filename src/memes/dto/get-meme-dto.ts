import { Expose } from 'class-transformer';
import { IsInt, IsString, IsUrl, Length, Min, Max } from 'class-validator';

export class GetMemeDto {
  @Expose()
  @IsInt()
  id: number;

  @Expose()
  @IsString()
  @Length(3, 100)
  name: string;

  @Expose()
  @IsUrl()
  image: string;

  @Expose()
  @IsInt()
  @Min(0)
  @Max(99)
  likes: number;
}
