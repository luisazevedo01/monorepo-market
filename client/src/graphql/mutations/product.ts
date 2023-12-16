import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
mutation CreateProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      id
      price
      title
      image
      stock
      ownerId
      description
    }
  }
`