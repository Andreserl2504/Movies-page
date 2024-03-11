import {
  List,
  ListItem,
  ListItemPrefix,
  Card,
  Typography,
  Spinner,
  Button
} from '@material-tailwind/react'
import { useUserProfile } from '../../hooks/useUserProfile'
import { AvatarUsers } from '../AvatarComponents/AvatarUsers'
import { useUser } from '../../hooks/useUser'

export function UserMenu() {
  const { menuUser } = useUserProfile()
  const { userInfo } = useUser()
  return (
    <Card className='w-96' placeholder={undefined}>
      <List placeholder={undefined}>
        {menuUser.isLoading || menuUser.isLoading === undefined ? (
          <div className=' w-full'>
            <Spinner color='blue' className='h-10 w-10' />
          </div>
        ) : (
          menuUser.userInfo?.map((info) => (
            <ListItem key={info.username} placeholder={undefined}>
              <ListItemPrefix placeholder={undefined}>
                <AvatarUsers srcProfile={info.profile_img} className=' min-w-12'/>
              </ListItemPrefix>
              <div className='flex justify-between w-full'>
                <div>
                  <Typography
                    variant='h6'
                    color='blue-gray'
                    placeholder={undefined}
                  >
                    {info.nickname ? info.nickname : info.username}
                  </Typography>
                  <Typography
                    variant='small'
                    color='gray'
                    className='font-normal'
                    placeholder={undefined}
                  >
                    {`@${info.username}`}
                  </Typography>
                </div>
                <div className='flex items-center'>
                  <Button className='' color='blue' placeholder={undefined} disabled={userInfo.username === info.username ? true : false}>
                    Follow
                  </Button>
                </div>
              </div>
            </ListItem>
          ))
        )}
      </List>
    </Card>
  )
}
