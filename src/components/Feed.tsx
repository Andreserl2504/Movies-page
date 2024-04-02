import { InputPost } from './FeedComponents/InputPost'
import { NoInputPost } from './FeedComponents/NoInputPost'
import { useUser } from '../hooks/useUser'

export function Feed() {
  const { userInfo } = useUser()
  return (
    <div className=' min-w-[600px] border-x-2'>
      <div>{userInfo.userID !== null ? <InputPost /> : <NoInputPost />}</div>
      <main>

      </main>
    </div>
  )
}
