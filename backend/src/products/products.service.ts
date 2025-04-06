import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ObjectId } from 'mongodb';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto.ts';


@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: CreateProductDto) {
    const payload = {
      ...data,
      id: new ObjectId().toHexString(), // <-- Fix
    };
    return this.prisma.product.create({ data: payload });
  }

  async findAllProducts() {
    return this.prisma.product.findMany();
  }

  async findProductById(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async updateProduct(id: string, data: UpdateProductDto) {
    return this.prisma.product.update({ where: { id }, data });
  }

  async deleteProduct(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
