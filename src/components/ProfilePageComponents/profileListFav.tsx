import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  List,
  ListItem
} from '@material-tailwind/react'
import { useSearchImdb } from '../../hooks/useSearchImdb'
import { useState } from 'react'
import { ItemListMovie } from '../globalComponents/ItemListMovie'
import { useParams } from 'react-router-dom'

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 }
}

export function ProfileListFav() {
  const [open, setOpen] = useState(0)
  const { username } = useParams()
  const { favMovies } = useSearchImdb({ searchFromServer: true, username: username})
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value)
  return (
    <>
      <Accordion
        open={open === 1}
        animate={CUSTOM_ANIMATION}
        placeholder={undefined}
      >
        <AccordionHeader
          className=' pl-5'
          onClick={() => handleOpen(1)}
          placeholder={undefined}
        >
          Favorites Movies
        </AccordionHeader>
        <AccordionBody className=' pt-0'>
          <Card
            className='w-full bg-gray-100 rounded-t-none'
            placeholder={undefined}
          >
            <List placeholder={undefined}>
              {favMovies && favMovies.length > 0 ? (
                <ItemListMovie movies={favMovies} />
              ) : (
                <ListItem placeholder={undefined}>idk</ListItem>
              )}
            </List>
          </Card>
        </AccordionBody>
      </Accordion>
    </>
  )
}
