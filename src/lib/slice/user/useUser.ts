import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'

export function useUser() {
  const { user } = useSelector((state: RootState) => state.user)
  return user as User | null
}
