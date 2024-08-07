import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer/footer'
import Nav from '@/components/nav/Nav'
import { GeistSans } from 'geist/font/sans'
import { cn } from '@/lib/utils'
import { UserProvider } from '@/state/user/UserProvider'
import { getUserAuth } from '@/lib/get/getUserAuth'
import { Toaster } from '@/components/ui/sonner'
import ReactQueryProvider from '@/components/query/ReactQueryProvider'

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
    <html lang="en" className="no-scrollbar">
      <body
        className={cn(
          'bg-dark relative flex min-h-screen flex-col',
          GeistSans.className,
        )}
      >
        <Toaster />
        <ReactQueryProvider>
          <UserProvider user={user}>
            <Nav />
            {children}
            <Footer />
          </UserProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
