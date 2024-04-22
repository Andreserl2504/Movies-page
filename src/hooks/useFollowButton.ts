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
    queryID: string
  }>({
    queryKey: ['isFollowing'],
    queryFn: async () => {
      const query =  {
        isFollowing: await getFromServer({
          URLServer: `/server/user/isFollowing/${following}/${follower}`
        }),
        queryID: following
      }
      console.log(query)
      return query
    },
    enabled: !!following && !!follower
  })

  const follow = useMutation({
    mutationFn: async (body: object) => {
      const isFollow = await postFromServer({
        serverURL: '/server/user/follow',
        body: body
      })
      setIsFollowing(isFollow)
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
    refetch()
  }, [refetch, following])
  useEffect(() => {
    // console.log(data)
    // console.log(following)
    // console.log(follower)
    if (data && data.queryID === following) {
      setIsFollowing(data.isFollowing)
    }
  }, [data, following])
  return { isFollowing, follow, unFollow }
}
