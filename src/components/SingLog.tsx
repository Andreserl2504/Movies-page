import { useUser } from '../hooks/useUser'
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox
} from '@material-tailwind/react'

export function SingLogForm() {
  const {
    logUserMirror,
    setLogUserMirror,
    inputError,
    sendInfoUser,
    setLogInputs
  } = useUser()
  const handleOpenLog = () =>
    setLogUserMirror((prevState: boolean) => !prevState)

  return (
    <>
      <Dialog
        size='xs'
        open={logUserMirror}
        handler={handleOpenLog}
        className='bg-transparent shadow-none'
        placeholder={undefined}
      >
        <Card className='mx-auto w-full max-w-[24rem]' placeholder={undefined}>
          <CardBody className='flex flex-col gap-4' placeholder={undefined}>
            <Typography variant='h4' color='blue-gray' placeholder={undefined}>
              Log in
            </Typography>
            <Typography
              className='mb-3 font-normal'
              variant='paragraph'
              color='gray'
              placeholder={undefined}
            >
              Enter your email and password to Sign In.
            </Typography>

            <Typography className='-mb-2' variant='h6' placeholder={undefined}>
              Your Email
            </Typography>
            <Input
              label='Email'
              size='lg'
              crossOrigin={undefined}
              error={inputError}
              onChange={(e) =>
                setLogInputs((prevState) => ({
                  ...prevState,
                  email: e.target.value
                }))
              }
            />
            <Typography className='-mb-2' variant='h6' placeholder={undefined}>
              Your Password
            </Typography>
            <Input
              label='Password'
              type='password'
              size='lg'
              crossOrigin={undefined}
              error={inputError}
              onChange={(e) =>
                setLogInputs((prevState) => ({
                  ...prevState,
                  password: e.target.value
                }))
              }
            />
            <div className='-ml-2.5 -mt-3'>
              <Checkbox
                label='Remember Me'
                crossOrigin={undefined}
                onChange={() =>
                  setLogInputs((prevState) => ({
                    ...prevState,
                    token: !prevState.token
                  }))
                }
              />
            </div>
          </CardBody>
          <CardFooter className='pt-0' placeholder={undefined}>
            <Button
              variant='gradient'
              fullWidth
              color='blue'
              placeholder={undefined}
              onClick={sendInfoUser}
            >
              Sign In
            </Button>
            <Typography
              variant='small'
              className='mt-4 flex justify-center'
              placeholder={undefined}
            >
              Don&apos;t have an account?
              <Typography
                as='a'
                href='#signup'
                variant='small'
                color='blue-gray'
                className='ml-1 font-bold'
                onClick={handleOpenLog}
                placeholder={undefined}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  )
}
