import { useContext } from 'react'
import { DiscoverContext } from '../Context/Discover'
import { DiscoverContextType } from '../Types/Discover'

export function useUserProfile() {
  const { menuUser } = useContext(DiscoverContext) as DiscoverContextType
  return { menuUser }
}
