'use client'

import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  if (pathname.includes('create')) return null
  return (
    <footer className="m500:text-sm z-30 bg-white px-5 py-5 text-center font-base">
      Released under MIT License. The source code is available on{' '}
      <a
        target="_blank"
        href="https://github.com/neobrutalism-templates/saas"
        className="font-heading underline"
      >
        Github
      </a>
      .
    </footer>
  )
}
