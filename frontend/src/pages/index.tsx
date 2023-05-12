import Head from 'next/head';
import { fetchAPI } from '@/lib/api';
import Home from '@/structure/Home';
import { IUser } from '@/types/types';

const Index = (users: IUser) => {
  return (
    <>
      <Head>
        <title>Bonito</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../img/favicon.png" />
      </Head>
      <Home {...users} />
    </>
  );
};

export const getStaticProps = async () => {
  const users = await fetchAPI('/users/?populate=meetings');
  return { props: { users } };
};

export default Index;
