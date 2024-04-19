import { Textarea, Progress, Chip, Button } from "@material-tailwind/react"
import { useState } from "react"
import { AvatarProfile } from "../AvatarComponents/AvatarProfile"
import { MenuSelectMovie } from "./InputPostComponent/MenuSelectMovie"

export function InputPost() {
  const [percentage, setPercentage] = useState(0)
  const handleChange = (length: number) => {
    setPercentage(length)
  }
  return (
    <div className='sx:hidden sx:w-screen flex flex-row h-44 border-b-2 [&_div]:h-full p-5 gap-3'>
      <div className=' w-16 flex justify-center pt-3'>
        <AvatarProfile link={true} />
      </div>
      <div className=' flex flex-col gap-3 w-full'>
        <Textarea
          label='What are you thinking?'
          onChange={(e) => handleChange(e.target.value.length)}
        />
        <div className=' flex max-h-5 justify-between px-5 items-center'>
          <div className='flex flex-nowrap items-center gap-5'>
            <div className=' gap-3 max-h-2 w-20'>
              <Progress
                value={percentage / 2.8}
                size='sm'
                color='blue'
                placeholder={undefined}
              />
            </div>
            <span>{`${percentage}/280`}</span>
          </div>
          <div className=' flex items-center'>
            <Chip open={true} value='Dismissible' />
            <MenuSelectMovie />
          </div>
          <Button
            className=' hover:shadow-md shadow-sm py-2 px-4'
            disabled={percentage == 0 || percentage > 280 ? true : false}
            color='blue'
            placeholder={undefined}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  )
}
