import { gql, useQuery } from '@apollo/client';

export const FETCH_USERS = gql`
query Users {
    users {
      email
      id
      name
    }
  }
`;