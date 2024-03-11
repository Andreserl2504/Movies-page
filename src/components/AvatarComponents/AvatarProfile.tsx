import { Avatar } from '@material-tailwind/react'
import { useUser } from '../../hooks/useUser'

export function AvatarProfile({
  className,
  scrProfile,
  size,
}: {
  className?: string
  scrProfile?: string
  size?: string
}) {
  const { userInfo } = useUser()
  return (
    <Avatar
    size={size ? size : 'md'}
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
