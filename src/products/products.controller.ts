/* eslint-disable prettier/prettier */
import { Body, Controller, Param, Post, Put } from '@nestjs/common';

import { Product } from './product.entity';
import { ProductService } from './products.service';
import { Property } from './property.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductService) {}

  
  @Post()
  async create(@Body() product:  Product) {
    const property1 = new Property();
    property1.name = "Ahşap";
    //const property2 = new Property();
    //property2.name = "Metal";
    product.properties = [property1];
    this.productsService.create(product);
  }
  @Put(':id')
  async update(@Param("id") id: string, @Body() product: Product) {

    const property1 = new Property();
    property1.name = "Ahşap8";
    //const property2 = new Property();
    //property2.name = "Metal1";
    //product.properties = [property1]
    this.productsService.update(id,product);
  }
}
 