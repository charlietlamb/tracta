import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer/footer'
import Nav from '@/components/nav/Nav'
import { GeistSans } from 'geist/font/sans'
import { cn } from '@/lib/utils'
import StoreProvider from '@/components/redux/StoreProvider'
import { UserProvider } from '@/lib/slice/user/UserProvider'
import { getUserAuth } from '@/lib/get/getUserAuth'
import { Toaster } from '@/components/ui/sonner'
import ReactQueryProvider from '@/components/query/ReactQueryProvider'
import { AuthProvider } from '@/lib/slice/auth/AuthProvider'

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
          'relative flex min-h-screen flex-col',
          GeistSans.className,
        )}
      >
        <Toaster />
        <ReactQueryProvider>
          <StoreProvider>
            <UserProvider user={user}>
              <AuthProvider>
                <Nav />
                {children}
                <Footer />
              </AuthProvider>
            </UserProvider>
          </StoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
