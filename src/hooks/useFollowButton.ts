import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getFromServer } from '../services/getFromServer'
import { useUser } from './useUser'

export function useFollowButton({ username }: { username: (string | undefined)[] }) {
  const { userInfo } = useUser()
  const [isFollowing, setIsFollowing] = useState<boolean[]>([false])
  const { data, refetch } = useQuery<
    {
      isFollowing: boolean[]
    }
  >({
    queryKey: ['isFollowing'],
    queryFn: async () =>
      getFromServer({
        URLServer: `/server/user/isFollowing/${username.toString()}/${userInfo.username}`
      })
  })

  useEffect(() => {
    if (username) {
      refetch()
    }
  }, [refetch, username])
  useEffect(() => {
    if (data) {
      setIsFollowing(data.isFollowing)
    }
  }, [data])
  return { isFollowing }
}
