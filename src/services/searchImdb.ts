import { imdbID } from '../Types/GeneralTypes'
import { API_KEY } from '../const/APIKey'

export async function searchImdb({ imdbID }: { imdbID: imdbID }) {
  return fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
    .then((response) => {
      if (response.ok) return response.json()
      throw new Error('Fetching error')
    })
    .then((json) => json)
}
