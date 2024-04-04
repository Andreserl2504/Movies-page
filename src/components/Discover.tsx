import { Input } from '@material-tailwind/react'
import { SearchPreview } from './DiscoverComponents/SearchPreview'
import { useSearchMovie } from '../hooks/useSearchMovie'
import { UserMenu } from './DiscoverComponents/UserMenu'
import { useState } from 'react'
import { MoviesFetchType } from '../Types/Discover'
import { MoviesFetch } from '../Types/querySearchParameter'

export function Discover() {
  const [movies, setMovies] = useState<MoviesFetchType[] | null>(null)
  const [search, setSearch] = useState<string>('')
  const handleChange = (search: string) => {
    setSearch(search)
  }
  const handelChangeData = (fetch: MoviesFetch | null) => {
    if (fetch) {
      setMovies(
        Array.from({ length: fetch.Search.length }, (_, i) => {
          return {
            imdbID: fetch.Search[i].imdbID,
            title: fetch.Search[i].Title,
            poster: fetch.Search[i].Poster,
            type: fetch.Search[i].Type,
            year: fetch.Search[i].Year
          }
        })
          .filter((movie) => movie.poster !== 'N/A')
          .splice(0, 5)
      )
    } else {
      setMovies(fetch)
    }
  }
  const { isLoading, isError } = useSearchMovie({
    search: search,
    handleChangeData: handelChangeData
  })
  return (
    <div className='flex flex-col gap-5 w-full p-5'>
      <div className='flex gap-5 flex-col relative'>
        <Input
          onChange={(e) => handleChange(e.target.value)}
          crossOrigin={undefined}
          label='Search'
        />
        {movies && (
          <SearchPreview
            info={movies}
            isError={isError}
            isLoading={isLoading}
          />
        )}
      </div>
      <div>
        <UserMenu />
      </div>
    </div>
  )
}
