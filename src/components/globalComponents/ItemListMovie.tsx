import { Link } from 'react-router-dom'
import {
  ListItem,
  ListItemSuffix,
  Chip,
  Rating
} from '@material-tailwind/react'
import { MoviesFetchType } from '../../Types/Discover'
import { GenreTags } from './GenresTags'

export function ItemListMovie({ movies }: { movies: MoviesFetchType[] }) {
  return (
    <>
      {movies.map((movie) => (
        <Link to={`/discover/${movie.imdbID}`} key={movie.imdbID}>
          <ListItem placeholder={undefined}>
            <div className='flex gap-5'>
              <div className='aspect-video'>
                <img
                  src={movie.poster}
                  className='rounded-md h-24 min-w-[70px]'
                  alt={movie.poster}
                />
              </div>
              <div className=' flex flex-col gap-1'>
                <strong>{movie.title}</strong>
                <div>
                  {movie.imdbRating && (
                    <Rating
                      value={Math.round(Number(movie.imdbRating) / 2)}
                      readonly
                      placeholder={undefined}
                    />
                  )}
                </div>
                <span>{movie.year[movie.year.length - 1] === '–'
                      ? movie.year.replace('–', '')
                      : movie.year}</span>
                <span className=' flex gap-3'>
                  <GenreTags genres={movie.genre}/>
                </span>
              </div>
            </div>
            <ListItemSuffix placeholder={undefined}>
              <Chip
                value={movie.type}
                variant='ghost'
                size='sm'
                className='rounded-full'
              />
            </ListItemSuffix>
          </ListItem>
        </Link>
      ))}
    </>
  )
}
