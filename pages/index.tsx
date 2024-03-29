import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import clientPromise from '../lib/mongodb'
import Head from 'next/head';
import Feed from '../components/Feed';
import Menu from '../components/Menu';

interface Props { 
  users: {},
  images: {}
}

const Home: NextPage<Props> = ({users, images}: Props) => {
  return (
    <div className="mx-auto bg-slate-100">
      <Head>
        <title>Crypto Cashier</title>
      </Head>

      <main className="grid grid-cols-12">
        <Menu />
        <Feed images={images}/>
      </main>
    </div>
  )
};

export default Home

export async function getServerSideProps (context) {
  const client = await clientPromise
  const db = client.db('test')
  let users = await db.collection('users').find({}).limit(1).toArray();
  let images = await db.collection('QRcode').find({}).toArray();
  users = JSON.parse(JSON.stringify(users));
  images = JSON.parse(JSON.stringify(images));
  return {
    props: { 
      users: users,
      images: images
     },
  }
}