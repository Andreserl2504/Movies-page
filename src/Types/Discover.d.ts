import { genres, imdbID, type } from "./GeneralTypes"

//Carrousel

export type CarruselInfo = {
  info:carruselElementInfo[]
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

export type DiscoverContextType = {
  menuUser: UserQueryType
}