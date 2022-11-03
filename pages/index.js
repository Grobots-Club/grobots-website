/* eslint-disable @next/next/no-html-link-for-pages */
import { use } from 'react';
import Profile from '../components/Profile';
import { client } from '../lib/apollo-config';
import { QUERIES } from '../lib/queries';
export default function Home({ users }) {
  return (
    <>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>

      <Profile></Profile>

      {users.map((user) => {
        return (
          <div key={user.user_id}>
            <h1>{user.name}</h1>
            <p>{user.user_id}</p>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: QUERIES.GET_USER_DETAILS,
  });

  console.log(data);
  return {
    props: {
      users: data.users,
    },
  };
}
