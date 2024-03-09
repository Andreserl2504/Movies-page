export const profilesFetching = async ({
  URLServer,
  username
}: {
  URLServer: string
  username?: string
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
