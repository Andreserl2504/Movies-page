import { useQuery } from '@tanstack/react-query'
import { useEffect, useRef, useState } from 'react'
import { postFromServer } from '../services/postFromServer'
import { useParams } from 'react-router-dom'
import { useUser } from './useUser'
import { getFromServer } from '../services/getFromServer'
import { deleteFromServer } from '../services/deleteFromServer'

export function useListButton({ btn }: { btn: string }) {
  const { imdbID } = useParams()
  const { userInfo } = useUser()
  const [isInList, setIsInList] = useState<boolean>(false)
  const method = useRef<string>('isInList')
  const { data, isLoading, isError, refetch } = useQuery<{
    isInList: boolean
    message?: string
  }>({
    queryKey: ['inList'],
    queryFn: async () => {
      if (method.current === 'isInList') {
        return getFromServer({
          URLServer: `/server/movie/list/isInList/${btn}/${userInfo.userID}/${imdbID}`
        })
      } else if (method.current === 'addToList') {
        method.current = 'isInList'
        return postFromServer({
          serverURL: `/server/movie/list/addToList/${btn}`,
          body: {
            imdbID: imdbID,
            userID: userInfo.userID
          }
        })
      } else {
        method.current = 'isInList'
        return deleteFromServer({
          serverURL: `/server/movie/list/removeToList/${btn}`,
          body: {
            userID: userInfo.userID,
            imdbID: imdbID
          }
        })
      }
    }
  })
  useEffect(() => {
    setIsInList(false)
    method.current = 'isInList'
    refetch()
  }, [imdbID, refetch])
  useEffect(() => {
    if (data?.isInList !== undefined) {
      if (data?.message) console.log(data.message)
      setIsInList(data.isInList)
    }
  }, [data, imdbID])
  const addToList = () => {
    method.current = 'addToList'
    refetch()
  }
  const removeToList = () => {
    method.current = 'removeToList'
    refetch()
  }
  return { isInList, isLoading, isError, addToList, removeToList }
}
