import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput, UpdateProductInput } from '../types/graphql';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create({ title, price, ownerId }: CreateProductInput) {
    return this.prisma.product.create({
      data: {
        title,
        price,
        ownerId,
      },
    });
  }

  findAllByOwner(ownerId: number) {
    return this.prisma.product.findMany({
      where: { ownerId },
      include: { owner: true },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return this.prisma.product.update({
      where: { id },
      data: {
        title: updateProductInput.title,
        description: updateProductInput.description,
        price: updateProductInput.price,
        ownerId: updateProductInput.ownerId,
      },
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
