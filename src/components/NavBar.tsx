import { Navbar } from '@material-tailwind/react'
import { Logo } from './icons/Logo'
import { HomeIcon, ProfileIcon } from './icons/TwitterIcons'
import { AvatarProfile } from './AvatarComponents/AvatarProfile'
import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <Navbar
      className=' h-screen p-5 rounded-none w-24 shadow-none sticky top-0'
      blurred={false}
      placeholder={undefined}
    >
      <div className='h-full min-w-12 flex flex-col justify-between'>
        <div className='flex flex-wrap min-w-12 gap-7 p-3'>
          <Logo className=' w-12' />
          <NavLink to={'/'} className=' w-12'>
            <HomeIcon />
          </NavLink>
          <NavLink to={'/user'} className=' w-12'>
            <ProfileIcon />
          </NavLink>
        </div>
        <div className='flex justify-center items-center'>
          <AvatarProfile className='px-auto' />
        </div>
      </div>
    </Navbar>
  )
}
