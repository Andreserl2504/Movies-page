import { Button } from '@material-tailwind/react'
import { useUser } from '../../hooks/useUser'

export function NoInputPost() {
  const { setLogUserMirror } = useUser()
  const handleLogIn = () => setLogUserMirror((prevState: boolean) => !prevState )
  return (
    <div className=' h-40 border-b-2 p-5 gap-5'>
      <span className='text-3xl font-bold'>
        Sign up or Log in to write your first review!!
      </span>
      <div className='flex gap-5 justify-end'>
        <Button color='blue' placeholder={undefined} className='text-base py-2'>
          Sign up
        </Button>
        <Button placeholder={undefined} className='text-base' onClick={handleLogIn}>
          Log in
        </Button>
      </div>
    </div>
  )
}
