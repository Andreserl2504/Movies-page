import { Carousel } from '@material-tailwind/react'
import { CarrouselElement } from './CarrouselElement'
import { CarruselElementInfo } from '../Types/Discover'

export function MoviesCarrousel({ genre, carrouselInfo }: { genre: string, carrouselInfo: CarruselElementInfo[] }) {
  
  

  return (
    <div className=' flex flex-wrap gap-3  py-5'>
      <div className='flex items-center h-8 border-b-2'>
        <span className=' text-xl w-full'>{genre}</span>
      </div>
      <Carousel
        className='rounded-xl  bg-gray-200 shadow-lg'
        autoplay={false}
        loop={true}
        placeholder={undefined}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className='absolute bottom-4 left-2/4 z-50 flex  gap-2'>
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'w-4 bg-gray-600' : 'w-2 bg-gray-400'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {carrouselInfo.map((info, i) => (
          <CarrouselElement key={i} title={info.title} poster={info.poster} />
        ))}
      </Carousel>
    </div>
  )
}
