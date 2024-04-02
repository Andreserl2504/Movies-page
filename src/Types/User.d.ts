type UUIDType = `${string}-${string}-${string}-${string}-${string}`

export type UserContextType = {
  userInfo: UserType
  logUserMirror: boolean
  setLogUserMirror: Dispatch<SetStateAction<boolean>>
  switchUserMirror: boolean
  setSwitchUserMirror: Dispatch<SetStateAction<boolean>>
  isLoading: boolean
  userToBackend: (userInfoInput: UserInfoType, param: FetchUserParameter) => void
  logOut: () => void
}


export type UserType = {
  userID: UUIDType | null
  username: string | null
  nickname: string | null
  imgProfile: string | null
}

export type UserInfoType = {
  userID?: UUIDType | null
  username?: string | null
  nickname?: string | null
  email?: string | null
  password?: string | null
  token?: boolean
  imgProfile?: string | null
}

export type FetchUserParameter = 'l' | 's' | ''