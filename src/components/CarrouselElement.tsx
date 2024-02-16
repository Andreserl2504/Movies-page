import { carruselElementInfo } from '../Types/CarrouselTypes'
import { Rating } from '@material-tailwind/react'

export function CarrouselElement({ title, poster }: carruselElementInfo) {
  return (
    <div className='flex gap-3 relative w-full max-w-[342.72px] h-40'>
      <img src={poster} alt='image 1' className=' h-40 object-cover' />
      <div className='p-5'>
        <div>
          <strong className=' '>{title}</strong>
        </div>
        <div className='flex flex-col absolute justify-between h-16'>
          <div>
            <span>Año, type</span>
          </div>
          <div>
            <Rating value={4} readonly placeholder={undefined} />
          </div>
        </div>
      </div>
    </div>
  )
}
