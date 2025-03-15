import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'kanerep | Front-End Engineer & Entrepreneur',
  description: 'Personal portfolio of kanerep - Front-End Engineer and aspiring entrepreneur',
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
}

// Script to prevent theme flash
const themeScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme');
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (theme === 'light' || !theme) {
        document.documentElement.classList.add('light');
      }
    } catch (e) {
      console.error('Theme detection failed:', e);
    }
  })();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            {process.env.LOADING_SCREEN === 'true' ? (
              <LoadingScreen />
            ) : (
              <>
                <Header />
                <main className="pt-24 pb-12">{children}</main>
                <Footer />
              </>
            )}
          </div>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
