import React, {useState, useEffect} from 'react'
import DropdownMenu from '../components/DropdownMenu'
import Menu from '../components/Menu'
import clientPromise from '../lib/mongodb'
import { useSession } from "next-auth/react"
import FileBase64 from "react-file-base64"
import Image from 'next/image'

interface Props { 
  users: any,
  images: any
}


function upload({users, images}: Props) {
  const { data: session } = useSession();
  const userName = session?.user.name;

  const [input, setInput] = useState('');
  const [ qr, setQr] = useState('https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880');

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

  const addQRcode = async (image) => {
    const data = await fetch(`http://localhost:3000/api/qrcode?user=${userName}&crypto=${coins[index].name}&qrcode=${image}`)
    const res = await data.json()
    console.log(res);
  }

  const checkIfExists = () => {
    for (let i = 0; i < images.length; i++) {
      if (images[i].user == userName && images[i].crypto == coins[index]?.name) {
        console.log('its already exist');
        return;
      }
    }
    addQRcode(qr);
  }

  useEffect(() => {
    console.log(qr);
  }, [qr]);
    
  return (
    <main className="grid grid-cols-12 ">
        <Menu />
        <div className="col-span-10 lg:col-span-8">
          <DropdownMenu changeIndex={i => setIndex(i)} coins={coins} image={image} symbol={symbol} name={name}/>
          <div onClick={() => checkIfExists()} className="text-xl bg-gray-800 flex m-2 py-2 pl-5 mb-0
              space-x-2 rounded-xl text-justify 
            hover:bg-gray-400 cursor-pointer text-white">
            Choose Network
          </div>

        <div className="m-2 p-2">
        <FileBase64 
            multiple={false}
            onDone={ ({base64})=>setQr(base64) }
          />
        </div>

          {/* <div className="flex flex-row flex-wrap space-x-2">
            {users && users.map(user =>(
              <div>
                <div onClick={() => { console.log("button clicked");}} className="cursor-pointer m-2 rounded-full p-2 bg-slate-500">{user.name}</div>
              </div>
                
            ))}
          </div> */}
          <div className="items-center bg-gray-800 m-2 p-3 rounded-xl ">
            <p className='text-white'>Wallet Address</p>
            <div  className='flex mt-2 justify-center pb-10'>
              <Image src={qr} width={250} height={250}/>
            </div>
            
          </div>

          <p onClick={() => checkIfExists()}
              className="text-xl bg-gray-800 flex m-2 py-2 mb-0
              rounded-xl place-content-center font-bold
              hover:bg-gray-400 cursor-pointer text-white">Submit</p>
          

        </div>
      </main>
  )
}

export default upload

export async function getServerSideProps (context) {
  const client = await clientPromise
  const db = client.db('test')
  // db.collection('users').updateOne({ name: "Danny Ho"}, { $set: { QRcode: "www.im-url.com"}});
  let users = await db.collection('users').find({}).limit(10).toArray();
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