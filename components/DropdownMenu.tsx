import React from 'react'
import Image from 'next/image'
import DropdownMenuRow from './DropdownMenuRow'
function DropdownMenu({ url, symbol, name }) {
  return (
		<div className="group relative">
			<div className='relative bg-gray-800 flex m-2 py-2 pl-5 mb-0
				space-x-2 rounded-xl text-justify 
				hover:bg-gray-400 cursor-pointer'
			>
				<Image className='bg-white rounded-full' src={url} width={30} height={30} />
				<div className='flex space-x-2 items-baseline'>
					<p className='text-xl text-gray-100 font-bold group-hover:text-gray-800'>{symbol}</p>
					<p className='text-gray-400 group-hover:text-gray-600'>{name}</p>
				</div>
			</div>
			<div className='hidden group-hover:block absolute rounded-md bg-slate-400 p-2 mx-2'>
				<DropdownMenuRow />
				<DropdownMenuRow />
				<DropdownMenuRow />
			</div>
		</div>
  )
}

export default DropdownMenu