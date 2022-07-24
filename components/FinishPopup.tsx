import React from 'react'

interface Props {
    trigger: boolean,
    children : any,
		setTrigger: any
};

function FinishPopup({trigger, children, setTrigger}: Props) {
    return (trigger) ? (
        <div   onClick={() => {setTrigger(false)}}
        className="grid px-10 py-20 mt-20 bg-slate-500 rounded-xl absolute z-10 justify-items-center">
                {children}
        </div>
      ) : <div></div>
}



export default FinishPopup