import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import NetworkBtn from './NetworkBtn'
import DecimalDigits from './DecimalDigits'
import Price from './Price'
import axios from 'axios'
import Dropdown from './Dropdown'


function Feed({ data }) {
  const url: string = data[1].image;
  const price: number = data[1].current_price;
  const symbol: string = data[1].symbol.toUpperCase();
  const priceChanged: number = data[1].price_change_percentage_24h.toFixed(2);
  return (
    <div className="col-span-10 lg:col-span-8">
        <Dropdown url={url}/>
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
          <div className='bg-kuRedDiv text-kuRed mx-3 p-1 rounded-xl'>{priceChanged}%</div>
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
