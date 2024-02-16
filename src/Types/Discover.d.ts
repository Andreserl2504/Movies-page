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

export type DiscoverContextType = {
  data: TQueryFndata
  isLoading: boolean
  isError: boolean
  handleChange: (inputValue:string) => void
}