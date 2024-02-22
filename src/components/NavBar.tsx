import { Navbar } from '@material-tailwind/react'
import { Logo } from './icons/Logo'
import { HomeIcon, ProfileIcon } from './icons/TwitterIcons'
import { AvatarProfile } from './Avatar'
import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <Navbar
      className=' relative h-screen p-5 rounded-none w-24 shadow-none'
      blurred={false}
      placeholder={undefined}
    >
      <div className='h-full min-w-12 flex flex-col justify-between'>
        <div className='flex flex-wrap min-w-12 gap-7 p-3'>
          <Logo className=' w-12' />
          <NavLink to={'/'}>
            <HomeIcon className=' w-12' />
          </NavLink>
          <NavLink to={'/user'}>
            <ProfileIcon className=' w-12' />
          </NavLink>
        </div>
        <div className='flex justify-center items-center'>
          <AvatarProfile className='px-auto' />
        </div>
      </div>
    </Navbar>
  )
}
