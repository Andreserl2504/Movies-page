import { InputPost } from './FeedComponents/InputPost'
import { NoInputPost } from './FeedComponents/NoInputPost'
import { useUser } from '../hooks/useUser'
import json from '../mocks/postJSON.json'
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography
} from '@material-tailwind/react'
import { FollowButton } from './globalComponents/FollowBtn'
import { AvatarUsers } from './AvatarComponents/AvatarUsers'
import { Link } from 'react-router-dom'

export function Feed() {
  const { userInfo } = useUser()
  return (
    <div className=' lg:min-w-fit lg:border-x-2'>
      <div>{userInfo.userID !== null ? <InputPost /> : <NoInputPost />}</div>
      <main>
        <List placeholder={undefined}>
          {json.map((post) => (
            <ListItem
              placeholder={undefined}
              key={post.postID}
              className=' px-10 flex-col'
            >
              <div className=' flex gap-5 flex-col'>
                <Card
                  color='transparent'
                  shadow={false}
                  className='w-full'
                  placeholder={undefined}
                >
                  <CardHeader
                    color='transparent'
                    floated={false}
                    shadow={false}
                    className='mx-0 flex items-center gap-4 pt-0 pb-3'
                    placeholder={undefined}
                  >
                    <div className=' w-14 h-14'>
                      <AvatarUsers
                        srcProfile={post.profileImg}
                        link={true}
                        username={post.username}
                      />
                    </div>

                    <div className='flex items-center justify-between w-full'>
                      <div className=' flex flex-col gap-1'>
                        <strong color='blue-gray'>{post.nickname}</strong>
                        <span color='blue-gray'>{`@${post.username}`}</span>
                      </div>
                      <div className='5 flex items-center gap-0'>
                        <FollowButton
                          isFollowing={post.isFollowing}
                          handleFollow={function (): void {
                            throw new Error('Function not implemented.')
                          }}
                          handleUnFollown={function (): void {
                            throw new Error('Function not implemented.')
                          }}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody className='mb-6 p-0' placeholder={undefined}>
                    <Typography placeholder={undefined}>
                      {post.content}
                    </Typography>
                  </CardBody>
                  <div className=' flex justify-center'>
                    <Link to={`/discover/${post.imdbID}`}>
                      <div>
                        <Card
                          className='h-40 min-w-96 flex-row'
                          placeholder={undefined}
                        >
                          <CardHeader
                            shadow={false}
                            floated={false}
                            className='m-0 w-2/5 shrink-0 rounded-r-none'
                            placeholder={undefined}
                          >
                            <img
                              src='https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg'
                              alt='card-image'
                              className='h-full w-full object-cover'
                            />
                          </CardHeader>
                          <CardBody placeholder={undefined}>
                            <Typography
                              color='gray'
                              className='mb-1 uppercase'
                              placeholder={undefined}
                            >
                              series
                            </Typography>
                            <Typography
                              variant='h5'
                              color='blue-gray'
                              placeholder={undefined}
                            >
                              One Piece
                            </Typography>
                            <Typography
                              color='gray'
                              className='mb-8 font-normal'
                              placeholder={undefined}
                            >
                              1999
                            </Typography>
                          </CardBody>
                        </Card>
                      </div>
                    </Link>
                  </div>
                </Card>
                <div className=' flex gap-5 mb-10'>
                  <strong>like</strong>
                  <strong>comment</strong>
                </div>
              </div>
              {post.comments.length > 0 && (
                <section className=' flex w-full flex-col'>
                  <Timeline>
                    {post.comments.map((comment) => (
                      <TimelineItem key={comment.postID} className=' w-full'>
                        <TimelineConnector />
                        <TimelineHeader>
                          <TimelineIcon className='p-0'>
                            <Avatar
                              size='sm'
                              className='border-blue-500'
                              src={comment.profileImg}
                              alt='user 1'
                              withBorder
                              placeholder={undefined}
                            />
                          </TimelineIcon>
                          <div className='flex flex-col'>
                            <Typography
                              variant='h6'
                              color='blue-gray'
                              placeholder={undefined}
                            >
                              {comment.nickname}
                            </Typography>
                            <Typography
                              color='blue-gray'
                              placeholder={undefined}
                            >
                              {`@${comment.username}`}
                            </Typography>
                          </div>
                        </TimelineHeader>
                        <TimelineBody className='pb-8'>
                          <Typography
                            color='gray'
                            className=' text-sm text-gray-600'
                            placeholder={undefined}
                          >
                            {comment.content}
                          </Typography>
                        </TimelineBody>
                      </TimelineItem>
                    ))}
                  </Timeline>
                  <div className=' w-full border-blue-500 border-2 text-blue-500 p-5 rounded-lg'>
                    <strong>Load more comments</strong>
                  </div>
                </section>
              )}
            </ListItem>
          ))}
        </List>
      </main>
    </div>
  )
}
