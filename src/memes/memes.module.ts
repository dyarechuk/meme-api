import { Module } from '@nestjs/common';
import { MemesService } from './memes.service';
import { MemesController } from './memes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MemesController],
  providers: [MemesService, PrismaService],
})
export class MemesModule {}
