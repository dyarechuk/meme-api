import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Query,
  Ip,
  Req,
} from '@nestjs/common';
import { MemesService } from './memes.service';
import { GetMemeDto } from './dto/get-meme-dto';
import { UpdateMemeDto } from './dto/update-meme.dto';
import { Meme } from '@prisma/client';
import { QueryMemesDto } from './dto/query-memes.dto';
import { SortField, SortOrder } from 'src/common/enums/sort.enum';
import { Request } from 'express';

@Controller('memes')
export class MemesController {
  constructor(private readonly memesService: MemesService) {}

  @Get()
  async findAll(@Query() query: QueryMemesDto): Promise<GetMemeDto[]> {
    const { sort = SortField.ID, order = SortOrder.ASC } = query;

    return await this.memesService.findAll(sort, order);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdateMemeDto,
    @Req() req: Request,
    @Ip() ip: string
  ): Promise<Meme> {
    const xForwardedFor = req.headers['x-forwarded-for'] as string;
    const realIp = xForwardedFor?.split(',')[0] || ip;

    console.log('Client IP:', realIp);
    console.log('IP', ip);

    return this.memesService.update(+id, data);
  }
}
