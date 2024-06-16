import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'

export function useAuthDialog() {
  const { open } = useSelector((state: RootState) => state.auth)
  return { open }
}
