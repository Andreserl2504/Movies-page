export async function postFromServer({
  serverURL,
  body
}: {
  serverURL: string
  body: object
}) {
  return fetch(serverURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
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
    .catch((e) => {
      return new Error(e)
    })
}
