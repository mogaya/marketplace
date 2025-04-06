import { IsString, IsNumber, IsArray, IsOptional, IsEnum } from 'class-validator';
import { ProductStatus } from '@prisma/client';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsEnum(ProductStatus)
  @IsOptional()
  status?: ProductStatus;

  @IsString()
  vendorId: string;

  @IsString()
  subCategoryId: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  sales?: string[];
}
