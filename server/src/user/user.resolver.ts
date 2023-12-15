import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import {
  Contact,
  CreateUserInput,
  UpdateUserInput,
  User,
} from '../types/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query('users')
  findAll() {
    return this.userService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  }

  @ResolveField('contacts', () => [Contact])
  async getContacts(@Parent() user: User): Promise<Contact[]> {
    // Assuming there's a method in the service to get contacts for a user
    console.log('////////////////////////////1');
    console.log('user: ', user.id);
    const contacts = await this.userService.getUserContacts(user.id);

    console.log(JSON.stringify(contacts));
    console.log(contacts);
    console.log('////////////////////////////2');

    return contacts;
  }
}
