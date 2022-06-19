import React from 'react'
import Image from 'next/image'

function DropdownMenuRow({coin}) {
  

  
  return (
    <div className="flex space-x-2 m-2">
      <Image className='bg-white rounded-full' src={coin.image} width={30} height={30} /> 
				<div className='flex space-x-2 items-baseline'>
					<p className='text-xl text-white font-bold group-hover:text-gray-800'>{coin.symbol}</p>
					<p className='text-gray-400 group-hover:text-gray-600'>{coin.name}</p>
				</div>
    </div>
  )
}



export default DropdownMenuRow