import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ImageService from './application/image.service';
import { ImageController } from './handler/image.controller';

@Module({
  imports: [],
  controllers: [AppController, ImageController],
  providers: [AppService, ImageService],
})
export class AppModule {}
