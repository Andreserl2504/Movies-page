import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'

export function BackBar({ tag }: { tag?: string | null }) {
  return (
    <section className=' flex flex-row items-center gap-5'>
      <Link to={'/'}>
        <button className=' h-14 w-14 flex justify-center items-center'>
          <ArrowLeftIcon className=' w-7' />
        </button>
      </Link>
      <strong>{tag}</strong>
    </section>
  )
}
