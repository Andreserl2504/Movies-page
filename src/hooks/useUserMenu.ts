import { useEffect, useState } from 'react'
import { useUser } from './useUser'
import { useQuery } from '@tanstack/react-query'
import { getFromServer } from '../services/getFromServer'
import { UserQueryType } from '../Types/Discover'

export function useUserMenu() {
  const { userInfo } = useUser()
  const [menuUser, setMenuUser] = useState<UserQueryType>({
    userInfo: undefined,
    isLoading: undefined,
    isError: undefined
  })
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['queryResult'],
    queryFn: async () =>
      await getFromServer({
        URLServer: `/server/user/menuUser/${userInfo.username}`
      })
  })
  useEffect(() => {
    if (userInfo?.username) {
      refetch()
    }
  }, [refetch, userInfo])

  useEffect(() => {
    setMenuUser((prevState) => ({
      ...prevState,
      isError: isError,
      isLoading: isLoading
    }))
    if (data?.queryResult) {
      setMenuUser((prevState) => ({
        ...prevState,
        userInfo: data.queryResult
      }))
    }
  }, [data, isError, isLoading])

  return { menuUser, isLoading, isError }
}
