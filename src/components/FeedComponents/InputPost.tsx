import { AvatarProfile } from '../Avatar'
import { Input, Progress, Button } from '@material-tailwind/react'
import { useState } from 'react'

export function InputPost() {
  const [percentage, setPercentage] = useState(0)
  const handleChange = (length: number) => {
    setPercentage(length)
  }
  return (
    <div className='flex flex-row h-40 border-b-2 [&_div]:h-full p-5 gap-3'>
      <div className=' w-16 flex justify-center pt-3'>
        <AvatarProfile />
      </div>
      <div className=' flex flex-col gap-3 w-full'>
        <Input
        crossOrigin={undefined}
          label='What are you thinking?'
          className=' text-wrap w-full flex justify-start'
          onChange={(e) => handleChange(e.target.value.length)}
        />
        <div className=' flex max-h-5 justify-between px-5 items-center'>
          <div className='flex flex-nowrap items-center gap-5'>
            <div className=' gap-3 max-h-2 w-20'>
              <Progress value={percentage / 2.8} size='sm' color='blue' placeholder={undefined}/>
            </div>
            <span>{`${percentage}/280`}</span>
          </div>
          <Button className=' hover:shadow-md shadow-sm py-2 px-4' disabled={percentage == 0 || percentage > 280 ? true : false} color='blue' placeholder={undefined}>
            Post
          </Button>
        </div>
      </div>
    </div>
  )
}
