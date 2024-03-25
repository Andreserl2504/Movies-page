import { useEffect, useState } from 'react'
import { useUser } from './useUser'
import { useQuery } from '@tanstack/react-query'
import { getFromServer } from '../services/getFromServer'
import { MenuUserType, UserQueryType } from '../Types/Discover'

export function useUserMenu() {
  const { userInfo } = useUser()
  const [menuUser, setMenuUser] = useState<UserQueryType>({
    userInfo: undefined,
    isLoading: undefined,
    isError: undefined
  })
  const { data, isLoading, isError, refetch } = useQuery<{
    queryResult: MenuUserType[]
  }>({
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
