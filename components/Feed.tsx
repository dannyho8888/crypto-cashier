import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import NetworkBtn from './NetworkBtn'
import DecimalDigits from './DecimalDigits'
import Dropdown from './Dropdown'

function Feed() {
  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('');
  const [image, setImage] = useState('https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880');
  const [price, setPrice] = useState(0);
  const [priceChange, setPriceChagne] = useState(0);
  let index: number;

  const [crypto, setCrypto] = useState('eth');

  const findCrpyto = (sym: string, coins) => {
    for (let i = 0; i < coins.length; i++) {
      if (coins[i].symbol == sym) 
        return i;
    }
    
    return 0;
  }

  // get coin information when first rendering the app
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const data = await res.json();
      index = findCrpyto(crypto, data)
      setImage(data[index].image);
      setName(data[index].name);
      setSymbol(data[index].symbol.toUpperCase());
      setPrice(data[index].current_price);
      setPriceChagne(data[index].price_change_percentage_24h.toFixed(2));
    }
    fetchData();
  })
  
  // update the coin information every 10 seconds
  useEffect(() => {
    setInterval(async () => {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const data = await res.json();
      setPrice(data[index].current_price);
      setPriceChagne(data[index].price_change_percentage_24h.toFixed(2));
    }, 10000);
  })

  

  return (
    <div className="col-span-10 lg:col-span-8">
        <Dropdown url={image} symbol={symbol} name={name}/>
        <div className="flex mt-2 space-x-3 px-2 py-1 items-center text-xs">
          <NetworkBtn title="BSC(BEP20)"/>
          <NetworkBtn title="ERC20"/>
          <NetworkBtn title="Arbitrum One"/>
        </div>

        <div className=" items-center bg-gray-800 m-2 p-3 rounded-xl ">
            <p className='text-white'>Wallet Address</p>
            <div  className='flex mt-2 justify-center pb-10'>
              <Image src="/QRcode.png" alt="" width={250} height={250}/>
            </div>
        </div>

        <div className="flex bg-gray-800 m-2 p-2 text-white rounded-xl items-center">
          <p className="font-bold">{symbol}</p>
          <p className="text-xs text-gray-400">/USDT</p>
          <p className='ml-auto'>${price}</p>
          <div className='bg-kuRedDiv text-kuRed mx-3 p-1 rounded-xl'>{priceChange}%</div>
        </div>
        
        <div className='m-2 grid grid-cols-3 grid-flow-row gap-x-5 gap-y-3'>
          <DecimalDigits title="7"/>
          <DecimalDigits title="8"/>
          <DecimalDigits title="9"/>
          <DecimalDigits title="4"/>
          <DecimalDigits title="5"/>
          <DecimalDigits title="6"/>
          <DecimalDigits title="1"/>
          <DecimalDigits title="2"/>
          <DecimalDigits title="3"/>
          <DecimalDigits title="0"/>
          <DecimalDigits title="00"/>
          <DecimalDigits title="."/>
        </div>
    </div>
  )
}

export default Feed