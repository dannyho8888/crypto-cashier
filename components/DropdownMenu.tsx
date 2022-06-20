import React from 'react'
import Image from 'next/image'
import DropdownMenuRow from './DropdownMenuRow'
function DropdownMenu({coins, image, symbol, name }) {
  return (
		<div className="group relative">
			<div className='bg-gray-800 flex m-2 py-2 pl-5 mb-0
				space-x-2 rounded-xl text-justify 
				group-hover:bg-slate-600 cursor-pointer
				group-hover:rounded-b-lg
				transition duration-500'
			>
				<Image className='bg-white rounded-full' src={image} width={30} height={30} />
				<div className=' flex space-x-2 items-baseline'>
					<p className='text-xl text-gray-100 font-bold group-hover:text-gray-200'>{symbol}</p>
					<p className='text-gray-400 group-hover:text-gray-300'>{name}</p>
				</div>
			</div>
			<div style={{width: "calc(100% - 16px)"}} 
			className='transition duration-500 hidden absolute 
			group-hover:block rounded-xl bg-slate-800 
			group-hover:rounded-t-lg
			mx-2 z-10'>
				<DropdownMenuRow coin={coins[0]}/> 
				<DropdownMenuRow coin={coins[1]}/>
				<DropdownMenuRow coin={coins[2]}/>
				<DropdownMenuRow coin={coins[3]}/>
				<DropdownMenuRow coin={coins[4]}/>
				<DropdownMenuRow coin={coins[5]}/>
				<DropdownMenuRow coin={coins[6]}/>
			</div>
		</div>
  )
}

export default DropdownMenu