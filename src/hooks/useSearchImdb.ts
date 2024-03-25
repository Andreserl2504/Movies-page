import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { searchImdb } from '../services/searchImdb'
import { MoviesFetchImdbID } from '../Types/moviesInfo'
import { MoviesFetchType } from '../Types/Discover'
import { getFromServer } from '../services/getFromServer'
import { useParams } from 'react-router-dom'

export function useSearchImdb() {
  const { username, imdbID } = useParams()
  const [favMovies, setFavMovies] = useState<MoviesFetchType[] | null>(null)
  const { data, isLoading, isError, refetch } = useQuery<MoviesFetchImdbID[]>({
    queryKey: ['imdb'],
    queryFn: async () => {
      if (username) {
        const { favoritesID } = await getFromServer({
          URLServer: `/server/movie/lists/${username}`
        })
        return Promise.all(
          Array.from({ length: favoritesID.length }, (_, i) =>
            searchImdb({ imdbID: favoritesID[i] })
          )
        )
      } else {
        return searchImdb({ imdbID: imdbID })
      }
    }
  })
  useEffect(() => {
    if (favMovies || imdbID) {
      refetch()
    }
  }, [username, refetch, favMovies, imdbID])
  useEffect(() => {
    if (data && data?.length > 0) {
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
    } else if (data && data.length === 0) {
      setFavMovies([])
    }
  }, [data])

  return { favMovies, isLoading, isError }
}
