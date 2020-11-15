import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    products = [
        { id: 1, name: 'One Plus 7', price: 48000 },
        { id: 2, name: 'I Phone X', price: 64999 }
    ];
    getProducts() {
        return this.products;
    }
    addProduct(product:any){
        this.products.push(product);
    }
    getProductById(id:number) {
        return this.products.find(p => p.id === id);
    }
}