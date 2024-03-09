import { Avatar } from '@material-tailwind/react'

export function AvatarUsers({
  srcProfile,
  className
}: {
  srcProfile?: string | undefined
  className?: string | undefined
}) {
  return (
    <Avatar
      src={
        srcProfile
          ? srcProfile
          : 'https://i.pinimg.com/564x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg'
      }
      alt='avatar'
      placeholder={undefined}
      className={`${className} aspect-square`}
    />
  )
}
