import { IsEnum, IsOptional } from 'class-validator';
import { SortField, SortOrder } from 'src/common/enums/sort.enum';

export class QueryMemesDto {
  @IsOptional()
  @IsEnum(SortField)
  sort?: SortField;

  @IsOptional()
  @IsEnum(SortOrder)
  order?: SortOrder;
}
