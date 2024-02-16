import { Search } from '../../Types/querySearchParameter'
import { IsError } from '../InputPreviewComponents/IsError'
import { Preview } from '../InputPreviewComponents/Preview'

export function SearchPreview({
  info,
  isLoading,
  isError
}: {
  info: Search[]
  isLoading: boolean
  isError: boolean
}) {
  return (
    <div className=' flex flex-wrap flex-col bg-gray-300 w-full gap-3 absolute z-50 rounded-md top-16'>
      {!isLoading && !isError ? (
        <Preview info={info} />
      ) : !isLoading && isError ? (
        <IsError />
      ) : (
        ''
      )}
    </div>
  )
}
