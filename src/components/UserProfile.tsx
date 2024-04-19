import { useParams } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { UserProfileInfo } from './ProfilePageComponents/UserProfileInfo'
import { NoUserProfileInfo } from './ProfilePageComponents/noUserProfileInfo'
import { ProfileListFav } from './ProfilePageComponents/profileListFav'
import { InputPost } from './FeedComponents/InputPost'

export function UserProfile() {
  const { username } = useParams()
  const { userInfo } = useUser()
  return (
    <div className='lg:min-w-[600px] lg:border-x-2 w-full'>
      {userInfo.userID && username ? (
        <>
          <UserProfileInfo param={username} userInfo={userInfo} />
          <section>
            <ProfileListFav />
          </section>
          <section>{username === userInfo.username && <InputPost />}</section>
        </>
      ) : (
        <NoUserProfileInfo />
      )}
    </div>
  )
}
