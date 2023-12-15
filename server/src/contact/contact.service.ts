import { Injectable } from '@nestjs/common';
import { CreateContactInput } from '../types/graphql';

@Injectable()
export class ContactService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createContactInput: CreateContactInput) {
    return 'This action adds a new contact';
  }

  findAll() {
    return `This action returns all contact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
