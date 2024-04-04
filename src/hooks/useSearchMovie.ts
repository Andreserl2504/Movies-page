import { useQuery } from '@tanstack/react-query'
import { searchMovie } from '../services/SearchMovies'
import { useCallback, useEffect } from 'react'
import { MoviesFetch } from '../Types/querySearchParameter'
import debounce from 'just-debounce-it'

export function useSearchMovie({
  handleChangeData,
  search
}: {
  handleChangeData: (fetch: MoviesFetch | null) => void
  search: string | null
}) {
  const { data, isLoading, isError, refetch } = useQuery<MoviesFetch>({
    queryKey: ['imdbID'],
    queryFn: async () => await searchMovie(search ? search : ''),
    enabled: !!search
  })

  const makeRefecth = debounce(async () => await refetch(), 200)
  const debounceSearchMovie = useCallback(makeRefecth, [makeRefecth])
  useEffect(() => {
    if (search === '') {
      handleChangeData(null)
    } else {
      debounceSearchMovie()
    }
  }, [debounceSearchMovie, search])
  useEffect(() => {
    if (data?.Search) {
      handleChangeData(data)
    }
  }, [data])

  return { isError, isLoading }
}
