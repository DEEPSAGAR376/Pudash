import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/footer'
import { TawkToScript } from '@/components/tawk-to-script'
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Melon Nodes - High Performance Hosting Solutions',
  description: 'Your trusted partner for high-performance hosting solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CartProvider>
            {children}
            <Footer />
            <TawkToScript />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'