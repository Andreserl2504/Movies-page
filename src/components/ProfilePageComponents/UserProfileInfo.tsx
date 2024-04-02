import { Button, Spinner } from '@material-tailwind/react'
import { UserType } from '../../Types/User'
import { useUserProfile } from '../../hooks/useUserProfile'
import { AvatarUsers } from '../AvatarComponents/AvatarUsers'
import { BackBar } from '../globalComponents/BackBar'

export function UserProfileInfo({
  userInfo,
  param
}: {
  userInfo: UserType
  param: string
}) {
  const { userProfile, isLoading, isError, isFollowing, logOut } =
    useUserProfile()

  return (
    <>
      {userProfile?.profileInfo?.id && !isLoading && !isError ? (
        <>
          <BackBar
            tag={
              userProfile.profileInfo.nickname
                ? userProfile.profileInfo.nickname
                : userProfile.profileInfo.username
            }
          />

          <main className=' flex flex-col justify-center relative w-full min-h-72 gap-5 border-b-2'>
            <div className='absolute top-0 w-full h-28  bg-blue-500'></div>
            <div className=' ml-12 '>
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
                <strong className=' text-xl'>
                  {userProfile.profileInfo.nickname
                    ? userProfile.profileInfo.nickname
                    : userProfile.profileInfo.username}
                </strong>
                <span className=' text-sm text-gray-500 ml-1'>{`@${userProfile.profileInfo.username}`}</span>
              </div>
              <div>
                {userInfo.username === param ? (
                  <Button placeholder={undefined} onClick={logOut}>
                    Log Out
                  </Button>
                ) : (
                  <>
                    {isFollowing[0] ? (
                      <Button
                        placeholder={undefined}
                        onClick={() => console.log('unfollow to-do')}
                      >
                        Unfollow
                      </Button>
                    ) : (
                      <Button
                        color='blue'
                        placeholder={undefined}
                        onClick={() => console.log('follow to-do')}
                      >
                        Follow
                      </Button>
                    )}
                  </>
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
