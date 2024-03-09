import { Avatar } from '@material-tailwind/react'
import { useUser } from '../../hooks/useUser'

export function AvatarProfile({
  className,
  scrProfile
}: {
  className?: string
  scrProfile?: string
}) {
  const { userInfo } = useUser()
  return (
    <Avatar
      src={
        scrProfile
          ? scrProfile
          : userInfo.imgProfile !== null
          ? userInfo.imgProfile
          : 'https://i.pinimg.com/564x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg'
      }
      alt='avatar'
      placeholder={undefined}
      className={`${className} aspect-square`}
    />
  )
}
