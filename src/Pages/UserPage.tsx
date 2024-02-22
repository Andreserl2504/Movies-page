import { Discover } from '../components/Discover'
import { UserProfile } from '../components/UserProfile'

export function UserPage() {
  return (
    <main className=' flex gap-10 w-full'>
      <UserProfile />
      <Discover />
    </main>
  )
}
