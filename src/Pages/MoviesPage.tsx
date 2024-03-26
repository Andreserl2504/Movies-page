import { useParams } from 'react-router-dom'
import { useSearchImdb } from '../hooks/useSearchImdb'
import { GenreTags } from '../components/globalComponents/GenresTags'
import { BackBar } from '../components/globalComponents/BackBar'

export function MoviesPages() {
  const { imdbID } = useParams()
  const { moviesInfo } = useSearchImdb({
    imdbID: [imdbID]
  })
  return (
    <main className=' min-w-[600px] border-x-2 relative'>
      {moviesInfo ? (
        <>
          <BackBar tag={`${moviesInfo[0].title} - ${moviesInfo[0].type}`}/>
          <div className=' w-full h-64 absolute select-none'>
            <img
              className=' w-full h-full object-cover absolute select-none'
              src={moviesInfo[0].poster}
              alt=''
            />
            <div className=' w-full h-full backdrop-blur-md absolute select-none'></div>
          </div>
          <section>
            <div className='flex justify-center pt-14'>
              <div className=' flex gap-7 flex-col relative w-48 items-center'>
                <img
                  className=' w-48 rounded-lg  border-white border-2 shadow-md'
                  src={moviesInfo[0].poster}
                  alt=''
                />
                <div className=' flex flex-col gap-2 w-80 text-center items-center'>
                  <strong className='text-2xl'>{moviesInfo[0].title}</strong>
                  <span>
                    {moviesInfo[0].year[moviesInfo[0].year.length - 1] === '–'
                      ? moviesInfo[0].year.replace('–', '')
                      : moviesInfo[0].year}
                  </span>
                  <span>
                    <GenreTags genres={moviesInfo[0].genre}/>
                  </span>
                </div>
              </div>
            </div>
            <div>
              fua
            </div>
          </section>
        </>
      ) : (
        <div>movie not found</div>
      )}
    </main>
  )
}
