'use client'

import { usePathname } from 'next/navigation'
import NavItems from './NavItems'
import NavLogo from './NavLogo'

export default function Nav() {
  const pathname = usePathname()
  if (pathname.includes('create')) return null
  return (
    <nav className="bg-dark text-light sticky top-0 z-50 flex w-full items-center justify-between border-b-2 border-accent px-4 py-2">
      <NavLogo />
      <NavItems />
    </nav>
  )
}
