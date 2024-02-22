import { useQuery } from '@tanstack/react-query'
import { searchMovie } from '../services/SearchMovies'
import { useCallback, useEffect, useState } from 'react'
import { MoviesFetch } from '../Types/querySearchParameter'
import debounce from 'just-debounce-it'

export function useSearchMovie() {
  const [search, setSearch] = useState<string>('')
  const { data, isLoading, isError, refetch } = useQuery<MoviesFetch>({
    queryKey: ['imdbID'],
    queryFn: async () => await searchMovie(search)
  })
  const makeRefecth = debounce(async () => await refetch(), 200)
  const debounceSearchMovie = useCallback(makeRefecth, [makeRefecth])
  const handleChange = async (inputValue: string) => {
    setSearch(inputValue)
  }
  useEffect(() => {
    debounceSearchMovie()
  }, [debounceSearchMovie])

  return { data, isError, isLoading, handleChange }
}
