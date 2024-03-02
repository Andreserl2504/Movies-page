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
import { FetchUserParameter, UserInfoType } from '../../Types/User'

export function SingUpDialog({
  inputError,
  handleSwitchForm,
  setSingInputs,
  sendInfoUser
}: {
  singUserMirror: boolean
  inputError: boolean
  setSingInputs: Dispatch<SetStateAction<UserInfoType>>
  handleSwitchForm: () => void
  sendInfoUser: (param: FetchUserParameter) => void
}) {
  return (
    <>
      <Card className='mx-auto w-full max-w-[24rem]' placeholder={undefined}>
        <CardBody className='flex flex-col gap-4' placeholder={undefined}>
          <Typography variant='h4' color='blue-gray' placeholder={undefined}>
            Sing Up
          </Typography>
          <Typography
            className='mb-3 font-normal'
            variant='paragraph'
            color='gray'
            placeholder={undefined}
          >
            Enter your email, password and username to Sign up.
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
              setSingInputs((prevState) => ({
                ...prevState,
                email: e.target.value
              }))
            }
          />
          <Typography className='-mb-2' variant='h6' placeholder={undefined}>
            Your username
          </Typography>
          <Input
            label='username'
            size='lg'
            crossOrigin={undefined}
            error={inputError}
            onChange={(e) =>
              setSingInputs((prevState) => ({
                ...prevState,
                username: e.target.value
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
              setSingInputs((prevState) => ({
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
                setSingInputs((prevState) => ({
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
            onClick={() => sendInfoUser('s')}
          >
            Sing up
          </Button>

          <Typography
            variant='small'
            className='mt-4 flex justify-center'
            placeholder={undefined}
          >
            Do you have an account?
            <Typography
              as='a'
              href='#signup'
              variant='small'
              color='blue-gray'
              className='ml-1 font-bold'
              onClick={handleSwitchForm}
              placeholder={undefined}
            >
              Log In
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </>
  )
}
