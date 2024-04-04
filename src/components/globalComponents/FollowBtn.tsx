import { Button } from '@material-tailwind/react'

export function FollowButton({ isFollowing }: { isFollowing: boolean }) {
  return (
    <div>
      {isFollowing ? (
        <Button placeholder={undefined} className='px-3'>UnFollow</Button>
      ) : (
        <Button color='blue' placeholder={undefined}>
          Follow
        </Button>
      )}
    </div>
  )
}
