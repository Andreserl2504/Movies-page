import { genres, imdbID, type } from './GeneralTypes'
import { UUIDType } from './User'

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
