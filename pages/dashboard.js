import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import Link from 'next/link';
import cookie from 'js-cookie';
import Router from 'next/router';

function Dashboard() {
  const {data, revalidate} = useSWR('/api/me', async function(args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Dashboard</h1>

      <h2>Proudly using Next.js, Mongodb and deployed with Now</h2>
      {loggedIn && (
        <>
          <p>Welcome {data.username}!</p>
          <button
            onClick={() => {
              cookie.remove('token');
              revalidate();
              Router.push('/');
            }}>
            Logout
          </button>
        </>
      )}
      {!loggedIn && (
        <>
          <Link href="/login">Login</Link>
        </>
      )}

      <p>This page is for the user's data. Simple. Right, {data.username}?</p>
    </div>
  );
}

export default Dashboard;
