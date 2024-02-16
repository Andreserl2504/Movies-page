export const searchMovie = async (APIURL: string) => {
  const response = await fetch(APIURL)
  if (!response.ok) throw new Error('fetching error')
  const info = await response.json()
  return info
}
