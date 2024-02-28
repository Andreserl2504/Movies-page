import { UserInfoType } from '../Types/User'

export async function userFetch(data: UserInfoType | undefined) {
  if (data !== undefined) {
    return fetch('/server/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('User fail')
        }
      })
      .then((json) => json)
  } else {
    return {
      userID: null,
      username: null,
      nickname: null,
      imgProfile: null
    }
  }
}
