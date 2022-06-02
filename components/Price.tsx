import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Price() {
  return (
        <div className="flex bg-gray-800 m-2 p-2 text-white rounded-xl items-center">
          <p className="font-bold">ETH</p>
          <p className="text-xs text-gray-400">/USDT</p>
          <p className='ml-auto'>$1111.1</p>
          <div className='bg-kuRedDiv text-kuRed mx-3 p-1 rounded-xl'>-10.35%</div>
        </div>
  )
}

export default Price