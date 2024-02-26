import { useContext, useState } from 'react'
import { UserContext } from '../Context/User'
import { UserContextType, UserInfoType } from '../Types/User'

export function useUser() {
  const {
    userInfo,
    isLoading,
    isError,
    logUserMirror,
    setLogUserMirror,
    userToBackend
  } = useContext(UserContext) as UserContextType
  const [inputError, setInputError] = useState<boolean>(false)
  const [logInputs, setLogInputs] = useState<UserInfoType>({
    userID: null,
    username: null,
    email:null,
    password: null,
    token: false
  })

  const sendInfoUser = () => {
    // setInputError(prevState => !prevState)
    userToBackend(logInputs)
  }


  // useEffect(() => {
  //   console.log(logInputs)
  // },[logInputs])

  return {
    userInfo,
    isLoading,
    isError,
    logUserMirror,
    setLogUserMirror,
    inputError,
    setLogInputs,
    sendInfoUser
  }
}
