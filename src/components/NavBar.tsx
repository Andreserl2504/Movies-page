import { Navbar } from '@material-tailwind/react'
import { Logo } from '../icons/Logo'
import { HomeIcon, ProfileIcon } from '../icons/TwitterIcons'
import { AvatarProfile } from './Avatar'

export function NavBar() {
  return (
    <Navbar
      className=' relative h-screen p-5 rounded-none w-24 shadow-none'
      blurred={false} placeholder={undefined}    >
      <div className='h-full min-w-12 flex flex-col justify-between'>
        <div className='flex flex-wrap min-w-12 gap-7 p-3'>
          <Logo className=' w-full' />
          <HomeIcon className=' w-full' />
          <ProfileIcon className=' w-full' />
        </div>
        <div className='flex justify-center items-center'>
          <AvatarProfile className='px-auto' />
        </div>
      </div>
    </Navbar>
  )
}
