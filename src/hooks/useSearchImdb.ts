import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { searchImdb } from '../services/searchImdb'
import { MoviesFetchImdbID } from '../Types/moviesInfo'
import { MoviesFetchType } from '../Types/Discover'
import { getFromServer } from '../services/getFromServer'

export function useSearchImdb({
  imdbID,
  searchFromServer,
  username
}: {
  imdbID?: (string | undefined)[]
  searchFromServer?: boolean
  username?: string | undefined
}) {
  const [moviesInfo, setMovieInfo] = useState<MoviesFetchType[] | null>(null)
  const [favMovies, setFavMovies] = useState<MoviesFetchType[] | null>(null)
  const { data, isLoading, isError, refetch } = useQuery<MoviesFetchImdbID[]>({
    queryKey: ['imdb'],
    queryFn: async () => {
      if (searchFromServer) {
        const { favoritesID } = await getFromServer({
          URLServer: `/server/movie/lists/${username}`
        })
        return Promise.all(
          Array.from({ length: favoritesID.length }, (_, i) =>
            searchImdb({ imdbID: favoritesID[i] })
          )
        )
      } else {
        return Promise.all(
          Array.from({ length: imdbID?.length }, (_, i) =>
            searchImdb({ imdbID: imdbID[i] })
          )
        )
      }
    }
  })
  useEffect(() => {
    if (favMovies || imdbID || username) {
      refetch()
    }
  }, [username, refetch, favMovies, imdbID])
  useEffect(() => {
    if (data && data.length > 0) {
      if (searchFromServer) {
        setFavMovies(
          Array.from({ length: data.length }, (_, i) => {
            return {
              imdbID: data[i].imdbID,
              title: data[i].Title,
              year: data[i].Year,
              duration: data[i].Runtime,
              genre: data[i].Genre.split(', '),
              poster: data[i].Poster,
              imdbRating: data[i].imdbRating,
              type: data[i].Type
            }
          })
        )
      } else {
        setMovieInfo(
          Array.from({ length: data.length }, (_, i) => {
            return {
              imdbID: data[i].imdbID,
              title: data[i].Title,
              year: data[i].Year,
              duration: data[i].Runtime,
              genre: data[i].Genre.split(', '),
              poster: data[i].Poster,
              imdbRating: data[i].imdbRating,
              type: data[i].Type
            }
          })
        )
      }
    } else if (data && data.length === 0) {
      setFavMovies([])
    }
  }, [data, searchFromServer])

  return { favMovies, moviesInfo, isLoading, isError }
}
