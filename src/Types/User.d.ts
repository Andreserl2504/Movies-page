type UUIDType = `${string}-${string}-${string}-${string}-${string}`

export type UserContextType = {
  userInfo: UserType
  logUserMirror: boolean
  setLogUserMirror: Dispatch<SetStateAction<boolean>>
  switchUserMirror: boolean
  setSwitchUserMirror: Dispatch<SetStateAction<boolean>>
  isLoading: boolean
  userToBackend: (userInfoInput: UserInfoType, param: FetchUserParameter) => void
}

export type UserInfoType = {
  userID?: UUIDType | null
  username?: string | null
  nickname?: string | null
  email?: string | null
  password?: string | null
  imgProfile?: string | null
  token?: boolean
}

export type FetchUserParameter = 'l' | 's' | ''