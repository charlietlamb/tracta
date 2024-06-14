import { getUser } from '@/lib/get/user/getUser'
import { Dispatch, SetStateAction, useEffect } from 'react'

export function useSetUser(
  userId: string,
  setUser: Dispatch<SetStateAction<User>>,
) {
  useEffect(() => {
    async function setUserAsync() {
      setUser(await getUser(userId))
    }
    setUserAsync()
  }, [userId])
}
