import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from '@material-tailwind/react'

export function ChangeImgProfile({
  handler,
  open
}: {
  handler: () => void
  open: boolean
}) {
  return (
    <>
      <Dialog open={open} size='xs' handler={handler} placeholder={undefined}>
        <div className='flex items-center justify-between'>
          <DialogHeader
            className='flex flex-col items-start'
            placeholder={undefined}
          >
            Change your profile image
          </DialogHeader>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='mr-3 h-5 w-5'
            onClick={handler}
          >
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <DialogBody placeholder={undefined}>
          <div className='grid gap-6'>
            <Input label='New nickname' crossOrigin={undefined} />
          </div>
        </DialogBody>
        <DialogFooter className='space-x-2' placeholder={undefined}>
          <Button
            variant='text'
            color='gray'
            onClick={handler}
            placeholder={undefined}
          >
            cancel
          </Button>
          <Button
            variant='gradient'
            color='gray'
            onClick={handler}
            placeholder={undefined}
          >
            change
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
