import { Input } from '@material-tailwind/react'
import { SearchPreview } from './DiscoverComponents/SearchPreview'
import { useSearchMovie } from '../hooks/useSearchMovie'
import { UserMenu } from './DiscoverComponents/UserMenu'
import { useState } from 'react'

export function Discover() {
  const [search, setSearch] = useState('')
  const { movies, isLoading, isError } = useSearchMovie(search)
  return (
    <div className='flex flex-col gap-5 w-full p-5'>
      <div className='flex gap-5 flex-col relative'>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          crossOrigin={undefined}
          label='Search'
        />
        {movies ? (
          <SearchPreview
            info={movies}
            isError={isError}
            isLoading={isLoading}
          />
        ) : (
          ''
        )}
      </div>
      <div>
        <UserMenu />
      </div>
    </div>
  )
}
