import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GetMemeDto } from './dto/get-meme-dto';
import { UpdateMemeDto } from './dto/update-meme.dto';
import { Meme } from '@prisma/client';
import { SortField, SortOrder } from 'src/common/enums/sort.enum';

@Injectable()
export class MemesService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(
    sort: SortField = SortField.ID,
    order: SortOrder = SortOrder.ASC
  ): Promise<GetMemeDto[]> {
    return await this.prismaService.meme.findMany({
      orderBy: {
        [sort]: order,
      },
    });
  }

  async update(id: number, data: UpdateMemeDto): Promise<Meme> {
    try {
      return await this.prismaService.meme.update({
        where: { id },
        data,
      });
    } catch {
      throw new NotFoundException(`Meme with id ${id} not found`);
    }
  }
}
