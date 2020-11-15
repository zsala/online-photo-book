import { Controller, Param, Post, Get, Req, Res } from '@nestjs/common';
import { ProductService } from './../application/product.service';

@Controller('products')
export class ProductController {
    
    constructor(private productService: ProductService) {}
    
    @Get()
    GetProducts() {
        return this.productService.getProducts();
    }
    
    @Get(':id')
    GetProductById(@Param() param: any) {
        return this.productService.getProductById(+param.id);
    }
}