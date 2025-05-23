import { Controller, Get, Body, Patch, Param, Query } from '@nestjs/common';
import { MemesService } from './memes.service';
import { GetMemeDto } from './dto/get-meme-dto';
import { UpdateMemeDto } from './dto/update-meme.dto';
import { Meme } from '@prisma/client';
import { QueryMemesDto } from './dto/query-memes.dto';
import { SortField, SortOrder } from 'src/common/enums/sort.enum';

@Controller('memes')
export class MemesController {
  constructor(private readonly memesService: MemesService) {}

  @Get()
  async findAll(@Query() query: QueryMemesDto): Promise<GetMemeDto[]> {
    const { sort = SortField.ID, order = SortOrder.ASC } = query;

    return await this.memesService.findAll(sort, order);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateMemeDto): Promise<Meme> {
    return this.memesService.update(+id, data);
  }
}
