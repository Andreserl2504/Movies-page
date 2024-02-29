import { ReactNode, createContext, useEffect, useRef, useState } from 'react'
import {
  FetchUserParameter,
  UserContextType,
  UserInfoType
} from '../Types/User'
import { userFetch } from '../services/userFetch'
import { useQuery } from '@tanstack/react-query'

export const UserContext = createContext<UserContextType | null>(null)

export function UserProvider({ children }: { children: ReactNode }) {
  const [logUserMirror, setLogUserMirror] = useState<boolean>(false)
  const [switchUserMirror, setSwitchUserMirror] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    userID: null,
    username: null,
    nickname: null,
    imgProfile: null
  })
  const infoToServer = useRef<UserInfoType>()
  const parameters = useRef<FetchUserParameter>('')
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['userID'],
    queryFn: async () =>
      userFetch('/server/user/', infoToServer.current, parameters.current)
  })
  const userToBackend = (
    userInfoInput: UserInfoType,
    param: FetchUserParameter
  ) => {
    parameters.current = param
    infoToServer.current = userInfoInput
    infoToServer.current = {
      ...infoToServer.current,
      userID: crypto.randomUUID()
    }
    refetch()
  }

  useEffect(() => {
    parameters.current = ''
    if (data?.queryResult) {
      setLogUserMirror(false)
      setUserInfo({
        userID: data.queryResult.userID,
        username: data.queryResult.username,
        nickname: data.queryResult.nickname,
        imgProfile: data.queryResult.profile_img,
      })
      console.log(data?.queryResult)
    }
  }, [data])

  return (
    <UserContext.Provider
      value={{
        userInfo,
        isLoading,
        isError,
        logUserMirror,
        switchUserMirror,
        setLogUserMirror,
        setSwitchUserMirror,
        userToBackend
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
