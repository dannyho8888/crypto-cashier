import React, {useState, useEffect} from 'react'
import DropdownMenu from '../components/DropdownMenu'
import Menu from '../components/Menu'
import clientPromise from '../lib/mongodb'
import { useSession } from "next-auth/react"

function upload({users}) {
  const { data: session } = useSession();
  const userName = session?.user.name;

  const [input, setInput] = useState('');

  const [coins, setCoins] = useState([]);
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [image, setImage] = useState('https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880');

  const [index, setIndex] = useState(0);    // coins[0] = bitcoin
  const fetchData = async () => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const data = await res.json();
      setCoins(data);
      setImage(data[index].image);
      setName(data[index].name);
      setSymbol(data[index].symbol.toUpperCase());
    } catch (e) {
      console.log("Error when fetching data")
    }
  }

  // get coin information when first rendering the app
  useEffect(() => {
    fetchData();
    console.log("testing index:" + index);
  }, [index])

  const addQRcode = async (user) => {
    const data = await fetch(`http://localhost:3000/api/qrcode?user=${userName}&crypto=${coins[index].name}&message=${input}`)
    const res = await data.json()
    console.log(res);
  }

  return (
    <main className="grid grid-cols-12 ">
        <Menu />
        <div className="col-span-10 lg:col-span-8">
        <DropdownMenu changeIndex={i => setIndex(i)} coins={coins} image={image} symbol={symbol} name={name}/>
          <div onClick={() => addQRcode(users[0])} className="text-xl bg-gray-800 flex m-2 py-2 pl-5 mb-0
          space-x-2 rounded-xl text-justify 
        hover:bg-gray-400 cursor-pointer text-white">Choose Network</div>
          <input className="m-2" type="file" />
          <form action="">
            <label>Title: </label>
            <input value={input} onInput={e => setInput((e.target as HTMLInputElement).value)}/>
          </form>

          <div className="flex flex-row flex-wrap space-x-2">
            {users && users.map(user =>(
              <div>
                <div onClick={() => { console.log("button clicked");}} className="cursor-pointer m-2 rounded-full p-2 bg-slate-500">{user.name}</div>
              </div>
                
            ))}
          </div>

        </div>
      </main>
  )
}

export default upload

export async function getServerSideProps (context) {
  const client = await clientPromise
  const db = client.db('test')
  // db.collection('users').updateOne({ name: "Danny Ho"}, { $set: { QRcode: "www.im-url.com"}});
  const data = await db.collection('users').find({}).limit(10).toArray();
  const users = JSON.parse(JSON.stringify(data));

  return {
    props: { users : users },
  }
}