import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { rootMetadata } from '@/config/site'
import { ClerkProvider } from '@clerk/nextjs'

const fontSans = FontSans({ subsets: 
  ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = rootMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased',fontSans.variable)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          //enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  )
}
