import { StarIcon as StarOutline } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/16/solid'
import { Button, Spinner } from '@material-tailwind/react'
import { useListButton } from '../../hooks/useListButton'

export function FavoriteBotton() {
  const { isInList, isLoading, isError, addToList, removeToList } =
    useListButton({
      btn: 'favorite'
    })
  return (
    <Button
      placeholder={undefined}
      color={isInList ? 'white' : 'blue'}
      className={
        isInList
          ? 'shadow-md shadow-blue-400 hover:shadow-lg hover:shadow-blue-400 p-2'
          : 'p-2'
      }
      onClick={isInList ? removeToList : addToList}
    >
      {isInList && !isLoading && !isError ? (
        <StarSolid className='w-7 fill-blue-400' />
      ) : !isInList && !isLoading && !isError ? (
        <StarOutline className='w-7' />
      ) : (
        <>{isLoading && !isError ? <Spinner /> : 'error'}</>
      )}
    </Button>
  )
}
