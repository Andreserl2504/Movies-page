import { Chip } from "@material-tailwind/react";

export function GenreTags({ genres }: { genres: string[] | undefined }) {
  return (
    <span className=" flex gap-2 ">
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre}
            value={genre}
            variant='ghost'
            size='sm'
            className='rounded-full'
          />
        ))}
    </span>
  )
}
