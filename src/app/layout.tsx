import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'kanerep | Front-End Engineer & Entrepreneur',
  description: 'Front-End Engineer ',
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
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
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
