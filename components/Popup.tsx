import React, { useState } from 'react'

interface Props {
    trigger: boolean,
    children : any,
		setTrigger: any
};

function Popup({trigger, children, setTrigger}: Props) {

  return (trigger) ? (
    <div className="grid px-10 py-20 mt-20 bg-slate-500 rounded-xl absolute z-10 justify-items-center">
			{children}
			<div >replace it?</div>
			<div className="flex">
				
				<div onClick={() => {setTrigger(false)}}
					className="py-1 px-2 bg-slate-300 rounded-full 
					w-10 m-1 cursor-pointer hover:bg-slate-400"
				>
					Yes
				</div>

				<div onClick={() => {setTrigger(false)}}
					className="py-1 px-2 bg-slate-300 rounded-full 
					w-10 m-1 cursor-pointer hover:bg-slate-400"
				>
					No
				</div>
			</div>
			
	</div>
  ) : <div></div>
}

export default Popup