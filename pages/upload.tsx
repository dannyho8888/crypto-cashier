import React from 'react'
import Menu from '../components/Menu'

function upload() {
  return (
    <main className="grid grid-cols-12 ">
        <Menu />
        <div>
            <input type="file" ></input>
        </div>
      </main>
  )
}

export default upload