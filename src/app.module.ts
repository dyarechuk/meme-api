import { Module } from '@nestjs/common';
import { MemesModule } from './memes/memes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MemesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
