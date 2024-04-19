import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFromServer } from '../services/getFromServer'
import { useQuery } from '@tanstack/react-query'
import { userProfileType } from '../Types/Discover'
import { useUser } from './useUser'

export function useUserProfile() {
  const { username } = useParams()
  const { logOut } = useUser()
  const [userProfile, setUserProfile] = useState<userProfileType>({
    profileInfo: {
      id: null,
      username: null,
      nickname: null,
      profileImg: null,
      description: null
    },
    following: null,
    followers: null
  })
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['profileInfo'],
    queryFn: async () =>
      await getFromServer({
        URLServer: `/server/user/userProfile/${username}`
      })
  })
  useEffect(() => {
    if (username) {
      refetch()
    }
  }, [refetch, username])
  useEffect(() => {
    if (data?.profileInfo?.id) {
      setUserProfile({
        profileInfo: {
          id: data.profileInfo.id,
          username: data.profileInfo.username,
          nickname: data.profileInfo.nickname,
          profileImg: data.profileInfo.profile_img,
          description: data.profileInfo.description
        },
        following: data.following,
        followers: data.followers
      })
    }
  }, [data])
  return { userProfile, isLoading, isError, logOut }
}
