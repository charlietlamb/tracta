'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const router = useRouter()
  return (
    <Button
      variant="whiteOutline"
      size="tight"
      onClick={() => router.push(href)}
    >
      {children}
    </Button>
  )
}
