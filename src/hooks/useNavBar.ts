import { useState } from 'react'

export function useNavBar() {
  const [path, setPath] = useState<string>(window.location.pathname)
  const changePath = () => {
    setPath(window.location.pathname)
  }
  return { path, changePath }
}
