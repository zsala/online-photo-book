import { Controller, Get, Res } from '@nestjs/common';
import ImageService from '../application/image.service';

@Controller('gallery')
export class GalleryController {
    
    @Get()
    render(@Res() res: Response) {
        res.sendFile('index.html', {
          root: './ui/',
        });
    }
}
  