import { Button } from '@material-tailwind/react'
import { useUser } from '../../hooks/useUser'

export function NoInputPost() {
  const { setLogUserMirror, setSwitchUserMirror } = useUser()
  const handleLogIn = () => {
    setSwitchUserMirror(true)
    setLogUserMirror(true)
  }
  const handleSingUp = () => {
    setSwitchUserMirror(false)
    setLogUserMirror(true)
  }
  return (
    <div className=' lg:h-40  border-b-2 p-5 gap-5'>
      <span className='lg:text-3xl text-xl font-bold'>
        Sign up or Log in to write your first review!!
      </span>
      <div className='flex gap-5 justify-end'>
        <Button
          color='blue'
          placeholder={undefined}
          className='lg:text-base py-2 text-sm'
          onClick={handleSingUp}
        >
          Sign up
        </Button>
        <Button
          placeholder={undefined}
          className='lg:text-base text-sm'
          onClick={handleLogIn}
        >
          Log in
        </Button>
      </div>
    </div>
  )
}
