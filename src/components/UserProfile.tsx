import { useUser } from '../hooks/useUser'
import { UserProfileInfo } from './ProfilePageComponents/UserProfileInfo'
import { NoUserProfileInfo } from './ProfilePageComponents/noUserProfileInfo'

export function UserProfile() {
  const { userInfo } = useUser()
  return (
    <div className='min-w-[600px] border-x-2'>
      {userInfo.userID ? (
        <UserProfileInfo userInfo={userInfo} />
      ) : (
        <NoUserProfileInfo />
      )}
    </div>
  )
}
