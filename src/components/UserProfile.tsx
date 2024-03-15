import { useParams } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { UserProfileInfo } from './ProfilePageComponents/UserProfileInfo'
import { NoUserProfileInfo } from './ProfilePageComponents/noUserProfileInfo'

export function UserProfile() {
  const { username } = useParams()
  const { userInfo } = useUser()
  return (
    <div className='min-w-[600px] border-x-2'>
      {userInfo.userID && username ? (
        <UserProfileInfo param={username} userInfo={userInfo} />
      ) : (
        <NoUserProfileInfo />
      )}
    </div>
  )
}
