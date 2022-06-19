import React from 'react'
import Image from 'next/image'
import DropdownMenuRow from './DropdownMenuRow'
function DropdownMenu({coins, url, symbol, name }) {
  return (
		<div className="group relative">
			<div className='relative bg-gray-800 flex m-2 py-2 pl-5 mb-0
				space-x-2 rounded-xl text-justify 
				hover:bg-gray-400 cursor-pointer hover:rounded-b-none'
			>
				<Image className='bg-white rounded-full' src={url} width={30} height={30} />
				<div className='flex space-x-2 items-baseline'>
					<p className='text-xl text-gray-100 font-bold group-hover:text-gray-800'>{symbol}</p>
					<p className='text-gray-400 group-hover:text-gray-600'>{name}</p>
				</div>
			</div>
			<div className='hidden absolute group-hover:block rounded-md bg-slate-700 p-2 mx-2'>
				<DropdownMenuRow coin={coins[0]}/>
				<DropdownMenuRow coin={coins[1]}/>
				<DropdownMenuRow coin={coins[2]}/>
			</div>
		</div>
  )
}

export default DropdownMenu