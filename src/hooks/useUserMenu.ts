import { useEffect, useState } from 'react'
import { useUser } from './useUser'
import { useQuery } from '@tanstack/react-query'
import { getFromServer } from '../services/getFromServer'
import { MenuUserType } from '../Types/Discover'

export function useUserMenu() {
  const { userInfo } = useUser()
  const [menuUser, setMenuUser] = useState<MenuUserType[] | undefined>(
    undefined
  )
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
    if (data?.queryResult) {
      setMenuUser(data.queryResult)
    }
  }, [data, isError, isLoading])
  return { menuUser, isLoading, isError }
}
