import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/footer'
import Nav from '@/components/nav/Nav'
import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {
  title: 'Tracta',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
