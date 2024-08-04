'use client'

import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  if (pathname.includes('create')) return null
  return (
    <footer className="m500:text-sm bg-light z-30 border-t-2 border-black px-5 py-5 text-center font-base">
      <span className="font-black italic">tracta</span> Alpha. We're currently
      in early stages of development.
    </footer>
  )
}
