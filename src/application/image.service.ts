import { Injectable } from '@nestjs/common';

@Injectable()
export default class ImageService {
    images = [
        { id: 1, title: 'Image 1', url: './../img/medium/1.jpg"' },
        { id: 2, title: 'Image 2', url: './../img/medium/2.jpg"' },
        { id: 3, title: 'Image 3', url: './../img/medium/3.jpg"' },
        { id: 4, title: 'Image 4', url: './../img/medium/4.jpg"' },
        { id: 5, title: 'Image 5', url: './../img/medium/5.jpg"' }
    ];
    get() {
        return this.images;
    }
    add(product:any){
        this.images.push(product);
    }
    getById(id:number) {
        return this.images.find(p => p.id === id);
    }
}