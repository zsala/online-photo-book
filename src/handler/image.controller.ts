import { Controller, Param, Post, Get, Req, Res } from '@nestjs/common';
import ImageService from '../application/image.service';

@Controller('images')
export class ImageController {
    
    constructor(private imageService: ImageService) {}
    
    @Get()
    GetImages() {
        return this.imageService.get();
    }
    
    @Get(':id')
    GetImageById(@Param() param: any) {
        return this.imageService.getById(+param.id);
    }
}