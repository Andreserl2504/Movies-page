import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getFromServer } from '../services/getFromServer'
import { postFromServer } from '../services/postFromServer'
import { deleteFromServer } from '../services/deleteFromServer'

export function useFollowButton({
  follower,
  following
}: {
  follower: string
  following: string
}) {
  const [isFollowing, setIsFollowing] = useState<boolean>(false)
  const { data, refetch } = useQuery<{
    isFollowing: boolean
  }>({
    queryKey: ['isFollowing'],
    queryFn: async () =>
      getFromServer({
        URLServer: `/server/user/isFollowing/${following}/${follower}`
      }),
    enabled: !!following
  })

  const follow = useMutation({
    mutationFn: async (body: object) => {
      await postFromServer({
        serverURL: '/server/user/follow',
        body: body
      })
    }
  })

  const unFollow = useMutation({
    mutationFn: async (body: object) => {
      await deleteFromServer({
        serverURL: '/server/user/unfollow',
        body: body
      })
    }
  })

  useEffect(() => {
    if (following) {
      refetch()
    }
  }, [refetch, following])
  useEffect(() => {
    if (data) {
      setIsFollowing(data.isFollowing)
    }
  }, [data])
  return { isFollowing, follow, unFollow, refetch }
}
