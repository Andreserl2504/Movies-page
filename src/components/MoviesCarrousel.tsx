import { Carousel } from '@material-tailwind/react'
import { CarrouselElement } from './CarrouselElement'
import { carruselElementInfo } from '../Types/CarrouselTypes'

export function MoviesCarrousel({ genre, carrouselInfo }: { genre: string, carrouselInfo: carruselElementInfo[] }) {
  
  

  return (
    <div className=' flex flex-wrap gap-3  py-5'>
      <div className='flex items-center h-8 border-b-2'>
        <span className=' text-xl w-full'>{genre}</span>
      </div>
      <Carousel
        className='rounded-xl  bg-gray-200 shadow-lg'
        autoplay={true}
        loop={true}
        placeholder={undefined}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {carrouselInfo.map((info) => (
          <CarrouselElement title={info.title} poster={info.poster} />
        ))}
      </Carousel>
    </div>
  )
}
