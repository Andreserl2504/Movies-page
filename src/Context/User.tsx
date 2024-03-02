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
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['id'],
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
    if (data?.id) {
      setLogUserMirror(false)
      setUserInfo({
        userID: data.id,
        username: data.username,
        nickname: data.nickname,
        imgProfile: data.profile_img
      })
    } else if (data?.message) {
      console.log(data.message)
    }
  }, [data])

  return (
    <UserContext.Provider
      value={{
        userInfo,
        isLoading,
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
