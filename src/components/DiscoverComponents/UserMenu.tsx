import {
  List,
  ListItem,
  ListItemPrefix,
  Card,
  Typography,
  Spinner,
  Button
} from '@material-tailwind/react'
import { AvatarUsers } from '../AvatarComponents/AvatarUsers'
import { useUser } from '../../hooks/useUser'
import { Link } from 'react-router-dom'
import { useUserMenu } from '../../hooks/useUserMenu'

export function UserMenu() {
  const { menuUser } = useUserMenu()
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
            <Link key={info.username} to={`/user/${info.username}`}>
              <ListItem placeholder={undefined}>
                <ListItemPrefix placeholder={undefined}>
                  <AvatarUsers
                    link={false}
                    username={info.username}
                    srcProfile={info.profile_img}
                    className=' min-w-12'
                  />
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
                    <Button
                      className=''
                      color='blue'
                      placeholder={undefined}
                      onClick={() => console.log('hi')}
                      disabled={
                        userInfo.username === info.username ? true : false
                      }
                    >
                      Follow
                    </Button>
                  </div>
                </div>
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </Card>
  )
}
