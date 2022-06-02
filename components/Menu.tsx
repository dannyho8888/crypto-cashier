import React from 'react'
import MenuRow from './MenuRow'
import { useSession, signIn, signOut } from "next-auth/react"
import { UserIcon, 
         HomeIcon, 
         UploadIcon, 
         LogoutIcon, 
         LoginIcon, 
         AdjustmentsIcon 
} from '@heroicons/react/outline';

function Menu() {
  const { data: session } = useSession();
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
        <MenuRow Icon={AdjustmentsIcon} title='Adjust' />
        <MenuRow Icon={HomeIcon} title='Menu'/>
        <MenuRow Icon={UploadIcon} title='Upload'/>
        <MenuRow 
          onClick={ session ? signOut : signIn } 
          Icon={session ? LogoutIcon : UserIcon }
          title={session ? 'SignOut' : 'Sign In'}
        />
    </div>
  )
}

export default Menu
