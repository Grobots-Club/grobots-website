import { gql } from '@apollo/client';

const GET_USER_DETAILS = gql`
  query MyQuery {
    users {
      name
      id
    }
  }
`;

export const QUERIES = {
  GET_USER_DETAILS,
};
