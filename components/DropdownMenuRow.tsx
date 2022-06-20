import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function DropdownMenuRow({coin}) {
  const [image, setImage] = useState('https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880');

  useEffect(() => {
    if (coin)
      setImage(coin?.image);
  }, [coin])
  
  return (
    <div 
    onClick={() => console.log(coin?.name)}
    className="flex space-x-2 p-2 rounded-xl hover:bg-slate-700">
      <Image className='bg-white rounded-full' src={image} width={30} height={30} /> 
      <div className='flex space-x-2 items-baseline'>
        <p className='text-xl text-white font-bold'>{coin?.symbol.toUpperCase()}</p>
        <p className='text-gray-400'>{coin?.name}</p>
      </div>
    </div>
  )
}

export default DropdownMenuRow