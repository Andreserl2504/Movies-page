import { useQuery } from '@tanstack/react-query'
import { searchMovie } from '../services/SearchMovies'
import { useCallback, useEffect, useState } from 'react'
import { MoviesFetch } from '../Types/querySearchParameter'
import debounce from 'just-debounce-it'
import { MoviesFetchType } from '../Types/Discover'

export function useSearchMovie(search: string) {
  const [movies, setMovies] = useState<MoviesFetchType[] | null>(null)
  const { data, isLoading, isError, refetch } = useQuery<MoviesFetch>({
    queryKey: ['imdbID'],
    queryFn: async () => await searchMovie(search)
  })
  const makeRefecth = debounce(async () => await refetch(), 200)
  const debounceSearchMovie = useCallback(makeRefecth, [makeRefecth])
  useEffect(() => {
    if (search === '') {
      setMovies(null)
    } else {
      debounceSearchMovie()
    }
  }, [debounceSearchMovie, search])
  useEffect(() => {
    if (data?.Search) {
      setMovies(
        Array.from({ length: data.Search.length }, (_, i) => {
          return {
            imdbID: data.Search[i].imdbID,
            title: data.Search[i].Title,
            poster: data.Search[i].Poster,
            type: data.Search[i].Type,
            year: data.Search[i].Year
          }
        })
          .filter((movie) => movie.poster !== 'N/A')
          .splice(0, 5)
      )
    }
  }, [data])

  return { movies, isError, isLoading }
}
