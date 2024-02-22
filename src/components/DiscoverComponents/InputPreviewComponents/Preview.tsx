import { Search } from '../../../Types/querySearchParameter'

export function Preview({ info }: { info: Search[] }) {
  return (
    <>
      {info
        ?.filter((movie) => movie.Poster !== 'N/A')
        .splice(0, 5)
        .map((movie) => (
          <div key={movie.imdbID} className=' flex h-20 gap-5'>
            <div className=' flex justify-center items-center w-20 rounded-l-lg'>
              <img
                src={movie.Poster}
                alt={movie.Title}
                className='object-cover size-full'
              />
            </div>
            <div className=' flex flex-col'>
              <strong>{movie.Title}</strong>
              <span className=' text-xs'>{`${movie.Year} | ${movie.Type}`}</span>
            </div>
          </div>
        ))}
    </>
  )
}
