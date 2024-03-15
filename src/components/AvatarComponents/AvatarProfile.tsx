import { Avatar } from '@material-tailwind/react'
import { useUser } from '../../hooks/useUser'
import { Link } from 'react-router-dom'
import { size } from '@material-tailwind/react/types/components/avatar'

export function AvatarProfile({
  className,
  scrProfile,
  size,
  link
}: {
  className?: string
  scrProfile?: string | undefined | null
  size?: size
  link: boolean
}) {
  const { userInfo } = useUser()
  return (
    <>
      {link ? (
        <Link to={`/user/${userInfo.username}`}>
          <Avatar
            size={size ? size : 'md'}
            src={
              scrProfile
                ? scrProfile
                : userInfo.imgProfile !== null
                ? userInfo.imgProfile
                : 'https://i.pinimg.com/564x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg'
            }
            alt='Profile image'
            placeholder={undefined}
            className={`${className} aspect-square`}
          />
        </Link>
      ) : (
        <Avatar
          size={size ? size : 'md'}
          src={
            scrProfile
              ? scrProfile
              : userInfo.imgProfile !== null
              ? userInfo.imgProfile
              : 'https://i.pinimg.com/564x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg'
          }
          alt='Profile image'
          placeholder={undefined}
          className={`${className} aspect-square`}
        />
      )}
    </>
  )
}
