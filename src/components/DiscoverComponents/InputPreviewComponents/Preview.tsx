import {
  Card,
  Chip,
  List,
  ListItem,
  ListItemSuffix
} from '@material-tailwind/react'
import { Search } from '../../../Types/querySearchParameter'
import { Link } from 'react-router-dom'

export function Preview({ info }: { info: Search[] }) {
  return (
    <>
      {info?.length > 0 ? (
        <Card className='w-96' placeholder={undefined}>
          <List placeholder={undefined}>
            {info
              ?.filter((movie) => movie.Poster !== 'N/A' && (movie.Type === 'movie' || movie.Type === 'series'))
              .splice(0, 5)
              .map((movie) => (
                <Link to={`/discover/${movie.imdbID}`} key={movie.imdbID}>
                  <ListItem placeholder={undefined}>
                    <div className='flex gap-5'>
                      <img
                        src={movie.Poster}
                        className='w-10 rounded-md'
                        alt=''
                      />
                      <div className=' flex flex-col gap-1'>
                        <strong>{movie.Title}</strong>
                        <span>{movie.Year}</span>
                      </div>
                    </div>
                    <ListItemSuffix placeholder={undefined}>
                      <Chip
                        value={movie.Type}
                        variant='ghost'
                        size='sm'
                        className='rounded-full'
                      />
                    </ListItemSuffix>
                  </ListItem>
                </Link>
              ))}
          </List>
        </Card>
      ) : (
        ''
      )}
    </>
  )
}
