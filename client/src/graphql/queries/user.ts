import { gql, useQuery } from '@apollo/client';

export const USERS = gql`
query Users {
    users {
      email
      id
      name
    }
  }
`;