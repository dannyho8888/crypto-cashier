import React, { useEffect, useState } from 'react'
import MenuRow from './MenuRow'
import { signIn, signOut } from "next-auth/react"
import Link from 'next/link';
import { UserIcon, 
         HomeIcon, 
         UploadIcon, 
         LogoutIcon, 
         LoginIcon, 
         AdjustmentsIcon 
} from '@heroicons/react/outline';


function Menu(props) {
  const userEmail = props.session?.user.email; 
  
  function uploadUrl(url:string){ 
    window.location.assign(url);
    return 0;
  }

  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <p>email: {userEmail}</p>
      <MenuRow onClick={() => uploadUrl("http://localhost:3000")} Icon={HomeIcon} title='Home'/>
      <MenuRow onClick={() => uploadUrl("http://localhost:3000/upload")} Icon={UploadIcon} title='Upload'/>
      <MenuRow Icon={AdjustmentsIcon} title='Adjust' />
      <MenuRow 
        onClick={ props.session ? signOut : signIn } 
        Icon={ props.session ? LogoutIcon : UserIcon }
        title={ props.session ? 'SignOut' : 'Sign In' }
      />
    </div>
  )
}

export default Menu
