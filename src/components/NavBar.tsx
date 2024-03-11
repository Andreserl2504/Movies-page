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
import { useNavBar } from '../hooks/useNavBar'

export function NavBar() {
  const { path, changePath } = useNavBar()
  return (
    <Navbar
      className=' h-screen p-5 rounded-none w-24 shadow-none sticky top-0'
      blurred={false}
      placeholder={undefined}
    >
      <div className='h-full min-w-12 flex flex-col justify-between'>
        <div className='flex flex-wrap min-w-12 gap-7 p-3'>
          <Logo className=' w-12' />
          <NavLink to={'/'} className=' w-12' onClick={changePath}>
            {path === '/' ? <HomeIconSolid /> : <HomeIcon />}
          </NavLink>
          <NavLink to={'/user'} className=' w-12' onClick={changePath}>
            {path === '/user' ? <ProfileIconSolid /> : <ProfileIcon />}
          </NavLink>
        </div>
        <div className='flex justify-center items-center'>
          <AvatarProfile className='px-auto' />
        </div>
      </div>
    </Navbar>
  )
}
