import { genres, imdbID, type } from './GeneralTypes'
import { UUIDType } from './User'
import { Rating } from './moviesInfo'

//Carrousel

export type CarruselInfo = {
  info: carruselElementInfo[]
  genres: genres
}

export type CarruselElementInfo = {
  title: string
  poster: string
}

//SearchInput

export type SearchResultType = {
  title: string
  year: string
  imdbID: imdbID
  type: type
  poster: string
}

// discoverContext

type MenuUserType = {
  id: string
  username: string
  nickname: string
  profile_img: string
}

type UserQueryType = {
  userInfo: MenuUserType[] | undefined
  isLoading: boolean | undefined
  isError: boolean | undefined
}

type ProfileInfoType = {
  id: UUIDType | null
  username: string | null
  nickname: string | null
  profileImg: string | null
  description: string | null
}

export type userProfileType = {
  profileInfo: ProfileInfoType | null
  followers: number | null
  following: number | null
}

export type MoviesFetchType = {
  imdbID: imdbID
  title: string
  year: string
  poster: string
  type: type
  duration?: string
  genre?: string[]
  imdbRating?: string
}

export type MoviesPageType = {
  imdbID: imdbID
  title: string
  year: string
  poster: string
  type: type
  duration?: string
  genre?: string[]
  rating: Rating[]
  plot: string
  director: string
  writer: string
  country: string
  awards: string
}
