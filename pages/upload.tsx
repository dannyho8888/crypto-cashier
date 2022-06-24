import React, {useState, useEffect} from 'react'
import DropdownMenu from '../components/DropdownMenu'
import Menu from '../components/Menu'
import clientPromise from '../lib/mongodb'

function upload(users) {
  console.log(users[2])
  const [coins, setCoins] = useState([]);
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [image, setImage] = useState('https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880');
  const [price, setPrice] = useState(0);
  const [priceChange, setPriceChange] = useState(0);

  const [index, setIndex] = useState(0);    // 0 = bitcoin

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const data = await res.json();
      setCoins(data);
      setImage(data[index].image);
      setName(data[index].name);
      setSymbol(data[index].symbol.toUpperCase());
      setPrice(data[index].current_price);
      setPriceChange(data[index].price_change_percentage_24h.toFixed(2));
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
    const data = await fetch(`http://localhost:3000/api/qrcode?user_id=${user.name}&guest=Ado`)
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
            <input className="border-2" 
            type="text" 
            pattern="[a-z]{0,9}"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
            required />
          </form>
          



        </div>
      </main>
  )
}

export default upload

export async function getServerSideProps (context) {
  const client = await clientPromise
  const db = client.db('test')
  db.collection('users').updateOne({ name: "Danny Ho"}, { $set: { QRcode: "www.im-url.com"}});
  let data = await db.collection('users').find({}).limit(10).toArray();
  data = JSON.parse(JSON.stringify(data));
  //console.log(data);
  return {
    props: { users : data },
  }
}