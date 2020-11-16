import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ImageService from './application/image.service';
import { ImageController } from './handler/image.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GalleryController } from './handler/gallery.controller';

Module({
  imports: 
  [ 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [
    AppController,
    ImageController,
    GalleryController
  ],
  providers: [AppService, ImageService],
})
export class AppModule {}