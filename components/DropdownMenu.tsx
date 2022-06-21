import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import DropdownMenuRow from './DropdownMenuRow'
function DropdownMenu(props) {
	const [index, setIndex] = useState(0);
	useEffect(
		() => props.changeIndex(index)
	, [index])
  return (
		<div className="group relative">
			<div className='bg-gray-800 flex m-2 py-2 pl-5 mb-0
				space-x-2 rounded-xl text-justify 
				group-hover:bg-slate-600 cursor-pointer
				group-hover:rounded-b-lg
				transition duration-500'
			>
				<Image className='bg-white rounded-full' src={props.image} width={30} height={30} />
				<div className=' flex space-x-2 items-baseline'>
					<p className='text-xl text-gray-100 font-bold group-hover:text-gray-200'>{props.symbol}</p>
					<p className='text-gray-400 group-hover:text-gray-300'>{props.name}</p>
					<p className='text-white'>{index}</p>
				</div>
			</div>
			<div style={{width: "calc(100% - 16px)"}} 
			className='transition duration-500 hidden absolute 
			group-hover:block rounded-xl bg-slate-800 
			group-hover:rounded-t-lg
			mx-2 z-10'>
				<DropdownMenuRow changeIndex={i => setIndex(i)} coin={props.coins[0]} i={0}/> 
				<DropdownMenuRow changeIndex={i => setIndex(i)} coin={props.coins[1]} i={1}/>
				<DropdownMenuRow changeIndex={i => setIndex(i)} coin={props.coins[2]} i={2}/>
				<DropdownMenuRow changeIndex={i => setIndex(i)} coin={props.coins[3]} i={3}/>
				<DropdownMenuRow changeIndex={i => setIndex(i)} coin={props.coins[4]} i={4}/>
				<DropdownMenuRow changeIndex={i => setIndex(i)} coin={props.coins[5]} i={5}/>
				<DropdownMenuRow changeIndex={i => setIndex(i)} coin={props.coins[6]} i={6}/>
			</div>
		</div>
  )
}

export default DropdownMenu