import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Menu from '../components/Menu'

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
// export const getServerSideProps = async () => {
//   const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
//   const coinsData = await res.json();
//   return {
//     props: { data: coinsData }
//   };
// };


