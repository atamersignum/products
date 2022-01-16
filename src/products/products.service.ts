import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(product: Product) {
    await this.productsRepository.save(product);
  }
  async update(id: string, product: Product) {
    await this.productsRepository.update(id, product);
  }
} 