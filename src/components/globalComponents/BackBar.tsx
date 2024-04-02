import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'

export function BackBar({ tag }: { tag?: string | null }) {
  const navigate = useNavigate()
  return (
    <section className=' flex flex-row items-center gap-5'>
      <button
        className=' h-14 w-14 flex justify-center items-center'
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon className=' w-7' />
      </button>

      <strong>{tag}</strong>
    </section>
  )
}
