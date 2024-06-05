import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/footer/footer'
import Nav from '@/components/nav/Nav'
import { GeistSans } from 'geist/font/sans'
import { cn } from '@/lib/utils'
import StoreProvider from '@/components/redux/StoreProvider'
import { UserProvider } from '@/lib/slice/user/UserProvider'
import { getUserAuth } from '@/lib/get/getUserAuth'

export const metadata: Metadata = {
  title: 'Tracta',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUserAuth()
  return (
    <html lang="en">
      <body className={cn('flex min-h-screen flex-col', GeistSans.className)}>
        <StoreProvider>
          <UserProvider user={user}>
            <Nav />
            {children}
            <Footer />
          </UserProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
