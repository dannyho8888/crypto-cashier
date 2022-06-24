import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import clientPromise from '../lib/mongodb'
import Head from 'next/head';
import Feed from '../components/Feed';
import Menu from '../components/Menu';

const Home: NextPage = (users) => {
  // console.log(users)
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

export async function getServerSideProps (context) {
  const client = await clientPromise
  const db = client.db('test')
  await db.collection('users').updateOne({ name: "Danny Ho"}, { $set: { QRcode: "www.image-url.com"}});
  let data = await db.collection('users').find({}).limit(1).toArray();
  data = JSON.parse(JSON.stringify(data));
  //console.log(data);
  return {
    props: { users : data },
  }
}