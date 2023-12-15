import { gql } from "@apollo/client";

export const PRODUCTS = gql`
query Products($ownerId: Int!) {
    products(ownerId: $ownerId) {
      description
      id
      image
      owner {
        name
      }
      price
      title
    }
  }
`