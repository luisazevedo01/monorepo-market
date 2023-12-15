import { Injectable } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInput, UpdateUserInput } from '../types/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create({ name, email, userType }: CreateUserInput) {
    return this.prisma.user.create({
      data: {
        name,
        email,
        userType,
      },
      include: { products: true, contacts: true },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: { products: true },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        products: true,
      },
    });
  }

  update(id: number, input: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id },
      data: {
        name: input.name,
        email: input.email,
      },
      include: { products: true },
    });
  }

  getUserContacts(userId: number): Promise<Contact[]> {
    return this.prisma.contact.findMany({ where: { userId } });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
      include: { products: true },
    });
  }

  // async getContactsByIds(contactIds: number[]): Promise<User[]> {
  //   return this.prisma.user.findMany({
  //     where: {
  //       id: {
  //         in: contactIds,
  //       },
  //     },
  //   });
  // }
}
