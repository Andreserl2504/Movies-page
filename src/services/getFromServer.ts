export const getFromServer = async ({
  URLServer
}: {
  URLServer: string
}) => {
  return fetch(URLServer)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        return (async () => {
          throw await response.text()
        })()
      }
    })
    .then((json) => json)
}
