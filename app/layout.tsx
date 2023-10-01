import './globals.css'
import { Open_Sans } from 'next/font/google'

import { ThemeProvider } from '@/components/ui/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import AuthContext from '@/context/AuthContext'
import { cn } from '@/lib/utils'

import type { Metadata } from 'next'


const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={cn(font.className)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <AuthContext>{children}</AuthContext>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
