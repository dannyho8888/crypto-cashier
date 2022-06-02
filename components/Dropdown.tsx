import React from 'react'
import Image from 'next/image'
function Dropdown({ url }) {

  return (
		<div className="group relative">
			<div className='bg-gray-800 flex mt-2 mx-2 py-2 pl-5
				space-x-2 rounded-xl text-justify 
				hover:bg-gray-400 cursor-pointer'
			>
				<Image className='bg-white rounded-full' src={url} width={30} height={30} />
				<div className='flex space-x-2 items-baseline'>
					<p className='text-xl text-gray-100 font-bold group-hover:text-gray-800'>ETH</p>
					<p className='text-gray-400 group-hover:text-gray-600'>Ethereum</p>
				</div>
			</div>
			<div className='rounded-xl bg-slate-400 p-2 mx-2'>
				div
			
			</div>
		</div>
    
		
		
  )
}

export default Dropdown