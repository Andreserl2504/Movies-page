import { ReactNode, createContext, useEffect, useRef, useState } from 'react'
import {
  FetchUserParameter,
  UserContextType,
  UserInfoType
} from '../Types/User'
import { userFetch } from '../services/userFetch'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'universal-cookie'
import { redirect } from 'react-router-dom'

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
  const cookieID = useRef(new Cookies(null, {}))
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['id'],
    queryFn: async () =>
      userFetch({
        serverURL: '/server/user/',
        data: infoToServer.current,
        param: parameters.current,
        token: cookieID.current.get('userIDToken')
      })
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
        userID: data.queryResult.id,
        username: data.queryResult.username,
        nickname: data.queryResult.nickname,
        imgProfile: data.queryResult.profile_img
      })
      if (data?.token) {
        cookieID.current.set('userIDToken', data.token)
      }
    } else if (data?.message) {
      console.log(data.message)
    }
  }, [data])
  const logOut = () => {
    if (cookieID.current.get('userIDToken')) {
      cookieID.current.remove('userIDToken')
    }
    setUserInfo({
      userID: null,
      username: null,
      nickname: null,
      imgProfile: null
    })
    redirect('/')
  }
  return (
    <UserContext.Provider
      value={{
        userInfo,
        isLoading,
        logUserMirror,
        switchUserMirror,
        cookieID,
        setLogUserMirror,
        setSwitchUserMirror,
        userToBackend,
        logOut
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
