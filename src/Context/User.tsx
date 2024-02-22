import { ReactNode, createContext, useEffect, useState } from 'react'
import { UserContextType, UserType } from '../Types/User'

export const UserContext = createContext<UserContextType | null>(null)

export function UserProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserType>({
    userID: crypto.randomUUID(),
    username: "gatoBoleta",
    nickname: "GATOOOOOOOOOOO",
    imgProfile: "https://i.pinimg.com/736x/ac/0a/e5/ac0ae546f368ed080bcf979fb6dfd777.jpg"
  })

  useEffect(() => {
    console.log(userInfo)
  }, [userInfo])

  return (
    <UserContext.Provider value={{ userInfo }}>{children}</UserContext.Provider>
  )
}
