import { FetchUserParameter, UserInfoType } from '../Types/User'

export async function userFetch(
  serverURL: string,
  data: UserInfoType | undefined,
  param: FetchUserParameter
) {
  if (data?.userID) {
    const toServer = { userData: data, params: param }
    return fetch(serverURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toServer)
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return (async () => {
            throw await response.text()
          })();
        }
      })
      .then((json) => json)
      .catch((e) => {
        return new Error(e)
      })
  } else {
    return {
      userID: null,
      username: null,
      nickname: null,
      imgProfile: null
    }
  }
}
