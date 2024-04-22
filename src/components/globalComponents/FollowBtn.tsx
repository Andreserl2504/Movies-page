import { Button, Spinner } from '@material-tailwind/react'
import { useFollowButton } from '../../hooks/useFollowButton'
import { UUIDType } from '../../Types/User'

export function FollowButton({
  follower,
  following,
  className
}: {
  follower: string | UUIDType
  following: string | UUIDType
  className?: string
}) {
  const { isFollowing, follow, unFollow } = useFollowButton({
    follower: follower,
    following: following
  })
  // console.log(following)
  return (
    <div>
      {isFollowing ? (
        <Button
          placeholder={undefined}
          className={className}
          onClick={() => unFollow.mutate}
        >
          Unfollow
        </Button>
      ) : (
        <Button
          color='blue'
          placeholder={undefined}
          className={className}
          onClick={() => {
            follow.mutate({
              followerID: follower,
              followingID: following
            })
          }}
        >
          Follow
        </Button>
      )}
    </div>
  )
}
