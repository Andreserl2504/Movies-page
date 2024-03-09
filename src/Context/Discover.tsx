import { ReactNode, createContext, useEffect, useState } from 'react'
import { DiscoverContextType, UserQueryType } from '../Types/Discover'
import { useQuery } from '@tanstack/react-query'
import { profilesFetching } from '../services/discoverFetch'

export const DiscoverContext = createContext<DiscoverContextType | null>(null)

export function DiscoverProvider({ children }: { children: ReactNode }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['queryResult'],
    queryFn: async () => await profilesFetching({ URLServer: '/server/user' })
  })
  const [menuUser, setMenuUser] = useState<UserQueryType>({
    userInfo: undefined,
    isLoading: undefined,
    isError: undefined
  })

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

  return (
    <DiscoverContext.Provider value={{ menuUser }}>
      {children}
    </DiscoverContext.Provider>
  )
}
