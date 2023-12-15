import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateContactInput } from '../types/graphql';
import { ContactService } from './contact.service';

@Resolver('Contact')
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Mutation('createContact')
  create(@Args('createContactInput') createContactInput: CreateContactInput) {
    return this.contactService.create(createContactInput);
  }

  @Query('contact')
  findAll() {
    return this.contactService.findAll();
  }

  @Query('contact')
  findOne(@Args('id') id: number) {
    return this.contactService.findOne(id);
  }

  @Mutation('removeContact')
  remove(@Args('id') id: number) {
    return this.contactService.remove(id);
  }
}
