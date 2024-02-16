import { Input } from '@material-tailwind/react'
import { MoviesCarrousel } from './MoviesCarrousel'
import { carruselInfo } from '../Types/CarrouselTypes'

export function Discover() {
  const carrouselInfo: carruselInfo[] = [
    {
      info: [
        {
          title: 'Your name',
          poster:
            'https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_SX300.jpg'
        },
        {
          title: 'Suzume',
          poster:
            'https://m.media-amazon.com/images/M/MV5BNGVkNDc3NjUtNTY5ZS00ZmE0LWE3YzctMDk2OTRlNTdiZWQwXkEyXkFqcGdeQXVyMTU3NDg0OTgx._V1_SX300.jpg'
        },
        {
          title: '5 Centimeter per second',
          poster:
            'https://m.media-amazon.com/images/M/MV5BODJhZDU1MDYtMDQ0NS00N2JmLWI2ZDAtMGNmN2RmNWJhNzQ5L2ltYWdlXkEyXkFqcGdeQXVyNjY1OTY4MTk@._V1_SX300.jpg'
        }
      ],
      genres: 'Fantasy'
    },
    {
      info: [
        {
          title: 'Breaking bad',
          poster:
            'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg'
        },
        {
          title: 'Better call saul',
          poster:
            'https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg'
        },
        {
          title: 'El Camino: A Breaking Bad Movie',
          poster:
            'https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg'
        }
      ],
      genres: 'Suspence'
    }
  ]
  return (
    <div className='flex flex-col gap-5 w-full p-5'>
      <div>
        <Input crossOrigin={undefined} label='Search' />
      </div>
      <div className='w-full'>
        {carrouselInfo.map((info) => (
          <MoviesCarrousel genre={info.genres} carrouselInfo={info.info} />
        ))}
      </div>
    </div>
  )
}
