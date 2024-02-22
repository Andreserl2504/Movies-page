import { Avatar } from '@material-tailwind/react'
import { useContext } from 'react'
import { UserContext } from '../Context/User'

export function AvatarProfile({ className }: { className?: string }) {
  const { userInfo } = useContext(UserContext)
  return (
    <Avatar
      src={ userInfo.imgProfile !== null ? userInfo.imgProfile : 'https://i.pinimg.com/736x/7b/ca/b9/7bcab9ab1902c790ec6308bb59013b7d.jpg'}
      alt='avatar'
      placeholder={undefined}
      className={className}
    />
  )
}
