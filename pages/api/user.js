import { getSession } from '@auth0/nextjs-auth0';
import { getAuthenticatedApolloClient } from '../../lib/apollo-config';
import { QUERIES } from '../../lib/queries';

export default async function handler(req, res) {
  const session = getSession(req, res);
  if (!session) {
    res.status(401).json('unauthorize');
  }

  console.log(session);
  const client = getAuthenticatedApolloClient(session.idToken ?? '');

  const data = await client.query({
    query: QUERIES.GET_USER_DETAILS,
  });

  res.status(500).json(data);
}
