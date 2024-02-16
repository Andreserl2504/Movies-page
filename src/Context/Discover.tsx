import { ReactNode, createContext, useState } from 'react'
import { DiscoverContextType } from '../Types/Discover'
import { useQuery } from '@tanstack/react-query'
import { MoviesFetch } from '../Types/querySearchParameter'

export const DiscoverContext = createContext<DiscoverContextType | null>(null)

export function DiscoverProvider({ children }: { children: ReactNode }) {
 

  return (
    <DiscoverContext.Provider
      value={{ data, isLoading, isError, handleChange }}
    >
      {children}
    </DiscoverContext.Provider>
  )
}
