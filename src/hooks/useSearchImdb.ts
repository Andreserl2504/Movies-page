import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { searchImdb } from '../services/searchImdb'
import { MoviesFetchImdbID } from '../Types/moviesInfo'
import { MoviesFetchType, MoviesPageType } from '../Types/Discover'
import { getFromServer } from '../services/getFromServer'

export function useSearchImdb({
  search,
  searchFromServer
}: {
  search: (string | undefined)[] | string | undefined
  searchFromServer?: boolean
}) {
  const [moviesInfo, setMovieInfo] = useState<MoviesPageType[] | null>(null)
  const [favMovies, setFavMovies] = useState<MoviesFetchType[] | null>(null)
  const { data, isLoading, isError, refetch } = useQuery<MoviesFetchImdbID[]>({
    queryKey: [],
    queryFn: async () => {
      if (searchFromServer && search) {
        const { favoritesID } = await getFromServer({
          URLServer: `/server/movie/lists/${search}`
        })
        return Promise.all(
          Array.from({ length: favoritesID.length }, (_, i) =>
            searchImdb({ imdbID: favoritesID[i] })
          )
        )
      } else {
        console.log('hi')
        return Promise.all(
          Array.from({ length: search?.length ?? 3 }, (_, i) =>
            searchImdb({ imdbID: search ? search[i] : undefined})
          )
        )
      }
    }
  })

  useEffect(() => {
    if (search) {
      refetch()
    }
  }, [refetch, search])
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
              year: data[i].Released,
              duration: data[i].Runtime,
              genre: data[i].Genre.split(', '),
              poster: data[i].Poster,
              type: data[i].Type,
              rating: data[i].Ratings,
              plot: data[i].Plot,
              director: data[i].Director,
              writer: data[i].Writer,
              country: data[i].Country,
              awards: data[i].Awards
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
