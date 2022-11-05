import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.HASURA_URL,
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
  },
  cache: new InMemoryCache(),
});

export function getAuthenticatedApolloClient(token) {
  return new ApolloClient({
    uri: process.env.HASURA_URL,
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: new InMemoryCache(),
  });
}
