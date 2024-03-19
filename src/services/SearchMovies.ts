import { API_KEY } from '../const/APIKey'

export const searchMovie = async (search: string) => {
  if (search) {
    const APIURL = `https://omdbapi.com/?s=${search}&apikey=${API_KEY}&`
    const response = await fetch(APIURL)
    if (!response.ok) throw new Error('fetching error')
    const info = await response.json()
    return info
  } else {
    return null
  }
}
