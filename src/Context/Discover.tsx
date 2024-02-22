import { ReactNode, createContext } from 'react'
import { DiscoverContextType } from '../Types/Discover'

export const UserContext = createContext<DiscoverContextType | null>(null)

export function DiscoverProvider({ children }: { children: ReactNode }) {
 

  return (
    <UserContext.Provider
      value={{}}
    >
      {children}
    </UserContext.Provider>
  )
}
