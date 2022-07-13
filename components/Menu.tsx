import React, { useEffect, useState } from 'react';
import MenuRow from './MenuRow';
import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';
import { UserIcon, 
         HomeIcon, 
         UploadIcon, 
         LogoutIcon, 
         LoginIcon, 
         AdjustmentsIcon 
} from '@heroicons/react/outline';


function Menu() {
  const { data: session } = useSession();
  const userImage = session?.user.image; 
  
  function uploadUrl(url:string){ 
    window.location.assign(url);
    return 0;
  }

  

  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <div className='items-center px-4 py-3'>
        {userImage && (
          <Image className='rounded-full' src={userImage} width={40} height={40}/>
        )}
      </div>
      
      <MenuRow 
        onClick={() => uploadUrl("http://localhost:3000")} 
        Icon={HomeIcon} title='Home'
      />
      <MenuRow 
        onClick={() => uploadUrl("http://localhost:3000/upload")} 
        Icon={UploadIcon} title='Upload'
      />
      <MenuRow Icon={AdjustmentsIcon} title='Adjust' />
      <MenuRow 
        onClick={ session ? signOut : signIn } 
        Icon={ session ? LogoutIcon : UserIcon }
        title={ session ? 'SignOut' : 'Sign In' }
      />
    </div>
  )
}

export default Menu
