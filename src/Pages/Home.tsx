import { Feed } from "../components/Feed";
import { Discover } from "../components/Discover";

export function Home() {
  return (
    <main className=" flex gap-10 w-full">
      <Feed/>
      <Discover/>
    </main>
  )
}
