import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Feed from '../components/Feed';
import Menu from '../components/Menu';

const Home: NextPage = () => {
  return (
    <div className="mx-auto bg-slate-100">
      <Head>
        <title>Crypto Cashier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-12 ">
        <Menu />
        <Feed />
      </main>
    </div>
  )
};

export default Home



