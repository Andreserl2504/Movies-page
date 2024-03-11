import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'
import { AvatarProfile } from '../AvatarComponents/AvatarProfile'
import { Button } from '@material-tailwind/react'
import { UserType } from '../../Types/User'

export function UserProfileInfo({ userInfo }: { userInfo: UserType }) {
  return (
    <>
      <section className=' flex flex-row items-center gap-5'>
        <Link to={'/'}>
          <button className=' h-14 w-14 flex justify-center items-center'>
            <ArrowLeftIcon className=' w-7' />
          </button>
        </Link>
        <strong>
          {userInfo.nickname ? userInfo.nickname : userInfo.username}
        </strong>
      </section>
      <main className=' flex flex-col justify-center relative w-full min-h-72 gap-5'>
        <div className='absolute top-0 w-full h-28  bg-blue-500'></div>
        <div className=' ml-12 '>
          <AvatarProfile className=' border-2  border-white' size='xxl' />
        </div>
        <div className='flex flex-row justify-between ml-10 mr-10'>
          <div className='flex flex-col '>
            <strong className=' text-xl'>{userInfo.nickname ? userInfo.nickname : userInfo.username}</strong>
            <span className=' text-sm text-gray-500 ml-1'>{`@${userInfo.username}`}</span>
          </div>
          <div>
            <Button placeholder={undefined}>Edit Profile</Button>
          </div>
        </div>
        <div>
          <div className=' flex gap-4 ml-10'>
            <span>
              <strong>0</strong> Following
            </span>
            <span>
              <strong>0</strong> Followers
            </span>
          </div>
        </div>
      </main>
    </>
  )
}
