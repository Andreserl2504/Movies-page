import { Button, Spinner } from '@material-tailwind/react'
import { UserType } from '../../Types/User'
import { useUserProfile } from '../../hooks/useUserProfile'
import { AvatarUsers } from '../AvatarComponents/AvatarUsers'
import { BackBar } from '../globalComponents/BackBar'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { ChangeNickname } from './ChangeNickname'
import { useState } from 'react'
import { ChangeImgProfile } from './ChangeImgProfile'
import { FollowButton } from '../globalComponents/FollowBtn'

export function UserProfileInfo({
  userInfo,
  param
}: {
  userInfo: UserType
  param: string
}) {
  const [openNickname, setOpenNickname] = useState(false)
  const handleOpenNickname = () => setOpenNickname(!openNickname)

  const [openProfileImage, setOpenProfileImage] = useState(false)
  const handleOpenProfileImage = () => setOpenProfileImage(!openProfileImage)
  const { userProfile, isLoading, isError, logOut } = useUserProfile()
  console.log(userProfile)
  return (
    <>
      {!!userProfile?.profileInfo?.id && !isLoading && !isError ? (
        <>
          <BackBar
            tag={
              userProfile.profileInfo.nickname
                ? userProfile.profileInfo.nickname
                : userProfile.profileInfo.username
            }
          />
          <ChangeNickname handler={handleOpenNickname} open={openNickname} />
          <ChangeImgProfile
            handler={handleOpenProfileImage}
            open={openProfileImage}
          />
          <main className=' flex flex-col justify-center relative w-full min-h-72 gap-5 border-b-2'>
            <div className='absolute top-0 w-full h-28  bg-blue-500'></div>
            <div className=' ml-12 relative'>
              {userInfo.username === param && (
                <div className=' absolute size-[110px] z-10'>
                  <Button
                    className=' opacity-0 hover:opacity-50 size-full rounded-full flex flex-col gap-2 justify-center items-center'
                    placeholder={undefined}
                    onClick={handleOpenProfileImage}
                  >
                    <PencilSquareIcon className=' w-5' />
                    <span>edit</span>
                  </Button>
                </div>
              )}
              <AvatarUsers
                link={false}
                className=' border-2  border-white'
                size='xxl'
                srcProfile={userProfile.profileInfo.profileImg}
                username={''}
              />
            </div>
            <div className='flex flex-row justify-between ml-10 mr-10'>
              <div className='flex flex-col '>
                <div className=' flex gap-2'>
                  <strong className=' text-xl'>
                    {userProfile.profileInfo.nickname
                      ? userProfile.profileInfo.nickname
                      : userProfile.profileInfo.username}
                  </strong>
                  {userInfo.username === param && (
                    <div className=' flex justify-center items-center'>
                      <Button
                        className=' p-1'
                        placeholder={undefined}
                        onClick={handleOpenNickname}
                      >
                        <PencilSquareIcon className=' w-4' />
                      </Button>
                    </div>
                  )}
                </div>
                <span className=' text-sm text-gray-500 ml-1'>{`@${userProfile.profileInfo.username}`}</span>
              </div>
              <div>
                {userInfo.username === param ? (
                  <Button placeholder={undefined} onClick={logOut}>
                    Log Out
                  </Button>
                ) : (
                  <FollowButton
                    follower={userInfo.userID ?? ''}
                    following={userProfile.profileInfo.id}
                  />
                )}
              </div>
            </div>
            <div>
              <div className=' flex gap-4 ml-10'>
                <span>
                  <strong>{userProfile?.following}</strong> Following
                </span>
                <span>
                  <strong>{userProfile?.followers}</strong> Followers
                </span>
              </div>
            </div>
          </main>
        </>
      ) : (
        <>
          {isLoading && !isError && !userProfile?.profileInfo?.id && (
            <Spinner />
          )}
          {isError && <h1>Error</h1>}
        </>
      )}
    </>
  )
}
