import { Card, List } from '@material-tailwind/react'
import { ItemListMovie } from '../../globalComponents/ItemListMovie'
import { MoviesFetchType } from '../../../Types/Discover'

export function Preview({ info }: { info: MoviesFetchType[] }) {
  return (
    <>
      {info && info?.length > 0 ? (
        <Card className='w-96' placeholder={undefined}>
          <List placeholder={undefined}>
            {info ? <ItemListMovie movies={info} /> : ''}
          </List>
        </Card>
      ) : (
        ''
      )}
    </>
  )
}
