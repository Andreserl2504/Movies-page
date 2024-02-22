type UUIDType = `${string}-${string}-${string}-${string}-${string}`

export type UserContextType = {
  userInfo: UserType
}

export type UserType = {
  userID: UUIDType | null
  username: string | null
  nickname: string | null
  imgProfile: string | null
}
