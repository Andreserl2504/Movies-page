import { Input } from '@material-tailwind/react'
import { SearchPreview } from './DiscoverComponents/SearchPreview'
import { UserMenu } from './DiscoverComponents/UserMenu'
import { useId } from 'react'
import { useSearchMovie } from '../hooks/useSearchMovie'

export function Discover() {
  const inputID = useId()
  const { movies, isLoading, isError, handleChange } = useSearchMovie(inputID)
  return (
    <div className='lg:flex p-5 hidden flex-col gap-5 '>
      <div className='flex gap-5 flex-col relative max-w-52'>
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
