'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function AccountButton() {
  const router = useRouter()
  return (
    <Button
      variant="navBold"
      size="tight"
      onClick={() => router.push('/account')}
    >
      {'My Contracts'}
    </Button>
  )
}
