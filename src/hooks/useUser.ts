import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/User'
import { FetchUserParameter, UserContextType, UserInfoType } from '../Types/User'

export function useUser() {
  const {
    userInfo,
    isLoading,
    logUserMirror,
    switchUserMirror,
    setLogUserMirror,
    setSwitchUserMirror,
    logOut,
    userToBackend
  } = useContext(UserContext) as UserContextType

  const [inputError, setInputError] = useState<boolean>(false)
  const [logInputs, setLogInputs] = useState<UserInfoType>({
    userID: null,
    username: null,
    email: null,
    password: null,
    token: false
  })

  
  const sendInfoUser = (param: FetchUserParameter) => {
    if (
      logInputs.email?.includes('.com') &&
      logInputs.email?.includes('@')
    ) {
      logInputs.email.toLowerCase()
      setInputError(false)
      userToBackend(logInputs, param)
    } else {
      setInputError(true)
    }
  }

  useEffect(() => {
    if (!logUserMirror)
      setLogInputs({
        userID: null,
        username: null,
        email: null,
        password: null,
        token: false
      })
  }, [logUserMirror])

  return {
    userInfo,
    isLoading,
    inputError,
    logUserMirror,
    switchUserMirror,
    setLogUserMirror,
    setSwitchUserMirror,
    setInputError,
    setLogInputs,
    sendInfoUser,
    logOut
  }
}
