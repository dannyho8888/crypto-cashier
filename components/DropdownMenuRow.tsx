import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function DropdownMenuRow(props) {
  const coinImage = props.coin?.image; 

  return (
    <div 
    onClick={() => props.changeIndex(props.i)}
    className="flex space-x-2 p-2 rounded-xl hover:bg-slate-700">
      {coinImage && (
        <Image className='bg-white rounded-full' src={coinImage} width={30} height={30} /> 
      )}
      <div className='flex space-x-2 items-baseline'>
        <p className='text-xl text-white font-bold'>{props.coin?.symbol.toUpperCase()}</p>
        <p className='text-gray-400'>{props.coin?.name}</p>
      </div>
    </div>
  )
}

export default DropdownMenuRow