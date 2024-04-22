import {
  List,
  ListItem,
  ListItemPrefix,
  Card,
  Typography,
  Spinner
} from '@material-tailwind/react'
import { AvatarUsers } from '../AvatarComponents/AvatarUsers'
import { useUser } from '../../hooks/useUser'
import { Link } from 'react-router-dom'
import { useUserMenu } from '../../hooks/useUserMenu'
import { FollowButton } from '../globalComponents/FollowBtn'

export function UserMenu() {
  const { menuUser, isLoading, isError } = useUserMenu()
  const { userInfo } = useUser()
  // console.log(menuUser)
  return (
    <Card className='w-96' placeholder={undefined}>
      <List
        placeholder={undefined}
        className='flex justify-center items-center'
      >
        {isLoading && menuUser == undefined ? (
          <div className=' w-full'>
            <Spinner color='blue' className='h-10 w-10' />
          </div>
        ) : (
          menuUser?.map((info) => (
            <Link to={`/user/${info.username}`} className=' w-full' key={info.id}>
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
                    <FollowButton
                      follower={userInfo?.userID ? userInfo.userID : ''}
                      following={info.id}
                    />
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
