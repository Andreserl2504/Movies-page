import { useUser } from "../hooks/useUser"

export function UserProfile() {
  const { userInfo } = useUser()
  return (
    <div className=' min-w-[600px] border-x-2'>
      <div>{ userInfo.username }</div>
      <div>{ userInfo.nickname }</div>
    </div>
  )
}
