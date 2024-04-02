import { Progress } from '@material-tailwind/react'
import { Rating } from '../../Types/moviesInfo'

export function CriticsCard({ movieRating }: { movieRating: Rating[] }) {
  return (
    <div className=' flex gap-5 justify-center'>
      {movieRating.map((page) => (
        <section
          key={page.Value}
          className=' w-40 h-20 rounded-l bg-gray-100 p-3 shadow-md justify-center items-center'
        >
          <strong>
            {page.Source === 'Internet Movie Database' ||
            page.Source === 'internet movie database'
              ? 'Imdb'
              : page.Source}
          </strong>
          <div className=' flex gap-2 justify-center items-center'>
            <strong>{page.Value}</strong>
            <br />
            <Progress
              value={
                page.Source === 'Internet Movie Database' ||
                page.Source === 'internet movie database'
                  ? (parseInt(page.Value) * 100) / 10
                  : parseInt(page.Value)
              }
              className='bg-gray-400'
              color='blue'
              size='sm'
              placeholder={undefined}
            />
          </div>
        </section>
      ))}
    </div>
  )
}
