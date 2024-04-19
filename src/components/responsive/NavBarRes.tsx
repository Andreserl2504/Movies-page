import { Navbar } from '@material-tailwind/react'
import { AvatarProfile } from '../AvatarComponents/AvatarProfile'
import { useUser } from '../../hooks/useUser'
import { NavLink } from 'react-router-dom'
import { HomeIconSolid, HomeIcon } from '../icons/TwitterIcons'

export function NavBarRes() {
  const { userInfo } = useUser()
  return (
    <Navbar
      className=' lg:hidden flex justify-between items-center rounded-none z-10 h-20 fixed bottom-0 bg-white shadow-none w-full'
      placeholder={undefined}
    >
      <div>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive
              ? '[&>*:first-child]:opacity-100 relative w-12 h-12'
              : '[&>*:first-child]:opacity-0 relative w-12 h-12'
          }
        >
          <HomeIconSolid className={'absolute'} />
          <HomeIcon />
        </NavLink>
      </div>
      <div>
        <AvatarProfile
          link={true}
          className=' border-2 border-blue-500'
          size='sm'
        />
      </div>
    </Navbar>
  )
}
