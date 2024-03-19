import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { imdbID } from '../Types/GeneralTypes'
import { searchImdb } from '../services/searchImdb'
import { MoviesFetchImdbID } from '../Types/moviesInfo'
import { MoviesFetchType } from '../Types/Discover'

export function useSearchImdb() {
  const [favMovies, setFavMovies] = useState<MoviesFetchType[] | null>(null)
  const moviesTest: imdbID[] = ['tt5311514', 'tt14230458', 'tt0903747']
  const { data, isLoading, isError } = useQuery<MoviesFetchImdbID[]>({
    queryKey: ['imdb'],
    queryFn: async () => {
      return Promise.all(
        Array.from({ length: moviesTest.length }, (_, i) =>
          searchImdb({ imdbID: moviesTest[i] })
        )
      )
    }
  })
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
    }
  }, [data])

  return { favMovies }
}
