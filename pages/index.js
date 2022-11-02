import Profile from '../components/Profile';

export default function Home() {
  return (
    <>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>

      <Profile></Profile>
    </>
  );
}
