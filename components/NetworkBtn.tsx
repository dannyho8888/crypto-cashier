import React from 'react'

interface Props { 
    title: string
}

function NetworkBtn({title}: Props) {
  return (
    <div className='group flex cursor-pointer max-w-fit items-center space-x-2 px-4 py-1
    rounded transition-all duration-200 bg-gray-800 hover:bg-gray-500 hover:scale-105
    delay-150'>
        <p className='text-white'>{title}</p>
    </div>
  )
}

export default NetworkBtn