import { useQuery } from '@tanstack/react-query'
import { searchMovie } from '../services/SearchMovies'
import { useEffect, useMemo, useState } from 'react'
import { MoviesFetch } from '../Types/querySearchParameter'
import debounce from 'just-debounce-it'
import { MoviesFetchType } from '../Types/Discover'

export function useSearchMovie(id: string) {
  const [movies, setMovies] = useState<MoviesFetchType[] | null>(null)
  const [search, setSearch] = useState<string>('')
  const { data, isLoading, isError, refetch } = useQuery<{
    moviesInfo: MoviesFetch
    id: string
  }>({
    queryKey: ['moviesInfo', 'imdbID'],
    queryFn: async () => {
      return { moviesInfo: await searchMovie(search), id: id }
    },
    enabled: !!search
  })
  const debounceSearchMovie = useMemo(() => debounce(refetch, 200), [refetch])
  const handleChange = (search: string) => {
    setSearch(search)
  }
  useEffect(() => {
    if (search === '') {
      setMovies(null)
    } else {
      debounceSearchMovie()
    }
  }, [debounceSearchMovie, search])
  useEffect(() => {
    if (
      data?.moviesInfo &&
      data.id === id &&
      data.moviesInfo.Response === 'True'
    ) {
      setMovies(
        Array.from({ length: data.moviesInfo.Search.length }, (_, i) => {
          return {
            imdbID: data.moviesInfo.Search[i].imdbID,
            title: data.moviesInfo.Search[i].Title,
            poster: data.moviesInfo.Search[i].Poster,
            type: data.moviesInfo.Search[i].Type,
            year: data.moviesInfo.Search[i].Year
          }
        })
          .filter((movie) => movie.poster !== 'N/A')
          .splice(0, 5)
      )
    }
  }, [data, id])

  return { movies, isError, isLoading, handleChange }
}
