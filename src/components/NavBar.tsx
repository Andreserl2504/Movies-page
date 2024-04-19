import { Navbar } from '@material-tailwind/react'
import { Logo } from './icons/Logo'
import {
  HomeIcon,
  HomeIconSolid,
  ProfileIcon,
  ProfileIconSolid
} from './icons/TwitterIcons'
import { AvatarProfile } from './AvatarComponents/AvatarProfile'
import { NavLink } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

export function NavBar() {
  const { userInfo } = useUser()
  return (
    <Navbar
      className='lg:block h-screen p-5 rounded-none w-24 shadow-none sticky top-0 ml-20 hidden'
      blurred={false}
      placeholder={undefined}
    >
      <div className='h-full min-w-12 flex flex-col justify-between'>
        <div className='flex flex-wrap min-w-12 gap-7 p-3'>
          <Logo  />
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? '[&>*:first-child]:opacity-100 relative w-12'
                : '[&>*:first-child]:opacity-0 relative w-12'
            }
          >
            <HomeIconSolid className={'absolute'} />
            <HomeIcon />
          </NavLink>
          <NavLink
            to={`/user/${userInfo.username ? userInfo.username : 'guest'}`}
            className={({ isActive }) =>
              isActive
                ? '[&>*:first-child]:opacity-100 relative w-12'
                : '[&>*:first-child]:opacity-0 relative w-12'
            }
          >
            <ProfileIconSolid className='absolute' />
            <ProfileIcon />
          </NavLink>
        </div>
        <div className='flex justify-center items-center'>
          <AvatarProfile link={false} className='px-auto' />
        </div>
      </div>
    </Navbar>
  )
}
