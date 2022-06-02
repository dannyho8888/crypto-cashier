import React from 'react'

interface Props { 
    title: string
}

function DecimalDigits({title}: Props) {
  return (
    <div className='cursor-pointer text-center items-center py-1 text-white text-2xl
    rounded-xl transition-all duration-200 bg-gray-800 hover:bg-gray-500 hover:scale-105
    delay-150'>
        <p className=''>{title}</p>
    </div>
  )
}

export default DecimalDigits