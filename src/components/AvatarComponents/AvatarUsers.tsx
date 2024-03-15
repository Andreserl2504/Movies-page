import { Avatar } from '@material-tailwind/react'
import { size } from '@material-tailwind/react/types/components/avatar'
import { Link } from 'react-router-dom'

export function AvatarUsers({
  srcProfile,
  className,
  size,
  link,
  username
}: {
  srcProfile?: string | undefined | null
  className?: string | undefined
  size?: size
  link: boolean
  username: string
}) {
  return (
    <>
      {link ? (
        <Link to={`user/${username}`}>
          <Avatar
            size={size ? size : 'md'}
            src={
              srcProfile
                ? srcProfile
                : 'https://i.pinimg.com/564x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg'
            }
            alt={username}
            placeholder={undefined}
            className={`${className} aspect-square`}
          />
        </Link>
      ) : (
        <Avatar
          size={size ? size : 'md'}
          src={
            srcProfile
              ? srcProfile
              : 'https://i.pinimg.com/564x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg'
          }
          alt={username}
          placeholder={undefined}
          className={`${className} aspect-square`}
        />
      )}
    </>
  )
}
