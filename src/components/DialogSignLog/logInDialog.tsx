import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox
} from '@material-tailwind/react'
import { Dispatch, SetStateAction } from 'react'
import { UserInfoType } from '../../Types/User'

export function LogInDialog({
  inputError,
  handleSwitchForm,
  setLogInputs,
  sendInfoUser
}: {
  logUserMirror: boolean
  inputError: boolean
  setLogInputs: Dispatch<SetStateAction<UserInfoType>>
  handleSwitchForm: () => void
  sendInfoUser: () => void
}) {
  return (
    <>
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
            Enter your email and password to Log In.
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
          <div className='flex gap-5 flex-wrap'>
            <Button
              variant='gradient'
              fullWidth
              color='blue'
              placeholder={undefined}
              onClick={sendInfoUser}
            >
              Log In
            </Button>
            <Button
              variant='gradient'
              fullWidth
              color='blue'
              placeholder={undefined}
              onClick={() => console.log('To Do')}
            >
              Log In as Guest
            </Button>
          </div>
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
              onClick={handleSwitchForm}
              placeholder={undefined}
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </>
  )
}
