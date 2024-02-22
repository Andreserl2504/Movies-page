import { useContext } from 'react'
import { UserContext } from '../Context/User'
import { InputPost } from './FeedComponents/InputPost'
import { NoInputPost } from '../components/FeedComponents/NoInputPost'

export function Feed() {
  const { userInfo } = useContext(UserContext)
  console.log(userInfo)
  return (
    <div className=' min-w-[600px] border-x-2'>
      <div>{userInfo.userID !== null ? <InputPost /> : <NoInputPost />}</div>
    </div>
  )
}
