import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
  ListItemSuffix,
  Chip
} from '@material-tailwind/react'
import { useSearchMovie } from '../../../hooks/useSearchMovie'
import { useState } from 'react'

export function MenuSelectMovie() {
  const [search, setSearch] = useState('')
  const { movies, isLoading, isError } = useSearchMovie(search)
  return (
    <Menu
      dismiss={{
        itemPress: false
      }}
    >
      <MenuHandler>
        <Button
          placeholder={undefined}
          className=' h-8 w-16 flex justify-center items-center'
        >
          Search
        </Button>
      </MenuHandler>
      <MenuList placeholder={undefined}>
        <Input
          label='Search'
          containerProps={{
            className: 'mb-4'
          }}
          onChange={(e) => setSearch(e.target.value)}
          crossOrigin={undefined}
        />
        <>
          {movies && !isLoading && !isError
            ? movies.map((movie) => (
                <MenuItem placeholder={undefined}>
                  <div className='flex flex-nowrap justify-between gap-5'>
                    <div className='flex flex-nowrap gap-5'>
                      <span className=' w-10'>
                        <img
                          className=' rounded-md'
                          src={movie.poster}
                          alt=''
                        />
                      </span>
                      <div className='flex flex-col gap-2'>
                        <strong>{movie.title}</strong>
                        <span>{movie.year}</span>
                      </div>
                    </div>
                    <div>
                      <ListItemSuffix placeholder={undefined}>
                        <Chip
                          value={movie.type}
                          variant='ghost'
                          size='sm'
                          className='rounded-full'
                        />
                      </ListItemSuffix>
                    </div>
                  </div>
                </MenuItem>
              ))
            : ''}
        </>
      </MenuList>
    </Menu>
  )
}
