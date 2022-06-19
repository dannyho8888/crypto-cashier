import React from 'react'
import Menu from '../components/Menu'

function upload() {
  return (
    <main className="grid grid-cols-12 ">
        <Menu />
        <div className="col-span-10 lg:col-span-8">
          <div className="text-xl bg-gray-800 flex m-2 py-2 pl-5 mb-0
          space-x-2 rounded-xl text-justify 
        hover:bg-gray-400 cursor-pointer text-white">Choose Coin</div>
          <div className="text-xl bg-gray-800 flex m-2 py-2 pl-5 mb-0
          space-x-2 rounded-xl text-justify 
        hover:bg-gray-400 cursor-pointer text-white">Choose Network</div>
          <input className="m-2" type="file" ></input>
          <h1>hello</h1>

          <button id="dropdownButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

          {/* <!-- Dropdown menu --> */}
          <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
          </div>




        </div>
      </main>
  )
}

export default upload