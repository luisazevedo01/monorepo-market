
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum UserType {
    CUSTOMER = "CUSTOMER",
    SELLER = "SELLER"
}

export class CreateContactInput {
    userId?: Nullable<number>;
}

export class CreateProductInput {
    title: string;
    price: string;
    ownerId: number;
}

export class UpdateProductInput {
    id: number;
    title: string;
    description?: Nullable<string>;
    price: string;
    ownerId?: Nullable<number>;
}

export class CreateUserInput {
    email: string;
    name: string;
    userType: UserType;
}

export class UpdateUserInput {
    id: number;
    email: string;
    name: string;
    contacts?: Nullable<Nullable<number>[]>;
    products?: Nullable<Nullable<number>[]>;
}

export class Contact {
    id?: Nullable<number>;
    user?: Nullable<User>;
}

export abstract class IQuery {
    abstract contacts(userId: number): Nullable<Nullable<Contact>[]> | Promise<Nullable<Nullable<Contact>[]>>;

    abstract contact(id: number): Nullable<Contact> | Promise<Nullable<Contact>>;

    abstract products(ownerId: number): Nullable<Product>[] | Promise<Nullable<Product>[]>;

    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createContact(createContactInput: CreateContactInput): Contact | Promise<Contact>;

    abstract removeContact(id: number): Nullable<Contact> | Promise<Nullable<Contact>>;

    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Product {
    id: number;
    title: string;
    description?: Nullable<string>;
    price: string;
    ownerId?: Nullable<number>;
    owner?: Nullable<User>;
}

export class User {
    id: number;
    email: string;
    name: string;
    userType: UserType;
    contacts?: Nullable<Nullable<Contact>[]>;
    products?: Nullable<Nullable<Product>[]>;
}

type Nullable<T> = T | null;
