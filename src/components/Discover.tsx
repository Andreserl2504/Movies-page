import { Input } from '@material-tailwind/react'
import { SearchPreview } from './DiscoverComponents/SearchPreview'
import { UserMenu } from './DiscoverComponents/UserMenu'
import { useId } from 'react'
import { useSearchMovie } from '../hooks/useSearchMovie'

export function Discover() {
  const inputID = useId()
  const { movies, isLoading, isError, handleChange } = useSearchMovie(inputID)
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
