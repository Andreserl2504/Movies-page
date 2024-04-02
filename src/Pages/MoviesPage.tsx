import { useParams } from 'react-router-dom'
import { useSearchImdb } from '../hooks/useSearchImdb'
import { GenreTags } from '../components/globalComponents/GenresTags'
import { BackBar } from '../components/globalComponents/BackBar'
import { CriticsCard } from '../components/MoviePageComponents/CriticsCards'
import { FavoriteBotton } from '../components/MoviePageComponents/FavoriteBotton'
import { Spinner } from '@material-tailwind/react'
import { useState } from 'react'

export function MoviesPages() {
  const [isLoadPage, setIsLoadPage] = useState<boolean>(true)
  const { imdbID } = useParams()
  const { moviesInfo, isError, isLoading } = useSearchImdb({
    search: [imdbID]
  })
  const [movie] = moviesInfo ?? []
  console.log(movie)
  return (
    <main
      className=' min-w-[600px] border-x-2 relative'
      onLoad={() => setIsLoadPage(false)}
    >
      {isLoadPage && isLoading && (
        <div className=' bg-white w-full h-full fixed'>
          <Spinner />
        </div>
      )}
      {movie && !isError ? (
        <>
          <BackBar tag={`${movie.title} - ${movie.type}`} />
          <div className=' w-full h-64 absolute select-none'>
            <img
              className=' w-full h-full object-cover absolute select-none'
              src={movie.poster}
              alt=''
            />
            <div className=' w-full h-full backdrop-blur-md absolute select-none'></div>
          </div>
          <section className='flex flex-col gap-5'>
            <div className='flex justify-center pt-14'>
              <div className=' flex gap-7 flex-col relative w-48 items-center'>
                <img
                  className=' w-48 rounded-lg  border-white border-2 shadow-md'
                  src={movie.poster}
                  alt=''
                />
                <div className=' flex flex-col gap-2 w-80 text-center items-center'>
                  <strong className='text-2xl'>{movie.title}</strong>
                  <span>{movie.year}</span>
                  <span>
                    <GenreTags genres={movie.genre} />
                  </span>
                </div>
              </div>
            </div>
            <div className=' flex justify-center w-full'>
              <FavoriteBotton />
            </div>
            <div className=' flex justify-center'>
              {movie.awards !== 'N/A' && (
                <section className=' flex flex-col bg-yellow-800 p-5 rounded-md w-64 text-center shadow-md shadow-yellow-900 text-yellow-200'>
                  <strong className=' text-yellow-200'>Awards:</strong>
                  {movie.awards}
                </section>
              )}
            </div>
            <div>
              <CriticsCard movieRating={movie.rating} />
            </div>
          </section>
        </>
      ) : (
        'error'
      )}
    </main>
  )
}
