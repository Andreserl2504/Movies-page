import { Dialog } from '@material-tailwind/react'
import { useUser } from '../hooks/useUser'
import { SingUpDialog } from './DialogSignLog/SingInDialog'
import { LogInDialog } from './DialogSignLog/logInDialog'

export function SingLogForm() {
  const {
    logUserMirror,
    setLogUserMirror,
    switchUserMirror,
    setSwitchUserMirror,
    inputError,
    setInputError,
    sendInfoUser,
    setLogInputs
  } = useUser()
  const handleOpenLog = () => {
    setInputError(false)
    setLogUserMirror((prevState: boolean) => !prevState)
  }
  const handleSwitchForm = () => {
    setLogInputs({
      userID: null,
      username: null,
      email: null,
      password: null,
      token: false
    })
    setInputError(false)
    setSwitchUserMirror((prevState: boolean) => !prevState)
  }
  return (
    <>
      <Dialog
        size='xs'
        open={logUserMirror}
        handler={handleOpenLog}
        className='bg-transparent shadow-none'
        placeholder={undefined}
      >
        {switchUserMirror ? (
          <LogInDialog
            logUserMirror={logUserMirror}
            inputError={inputError}
            handleSwitchForm={handleSwitchForm}
            sendInfoUser={sendInfoUser}
            setLogInputs={setLogInputs}
          />
        ) : (
          <SingUpDialog
            singUserMirror={switchUserMirror}
            inputError={inputError}
            handleSwitchForm={handleSwitchForm}
            sendInfoUser={sendInfoUser}
            setSingInputs={setLogInputs}
          />
        )}
      </Dialog>
    </>
  )
}
