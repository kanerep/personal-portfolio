import { NextResponse } from 'next/server'

export function middleware() {
  // Get response
  const response = NextResponse.next()

  // Add security headers
  const headers = response.headers

  // CSP - Content Security Policy
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' vercel.live *.vercel-insights.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: images.unsplash.com; font-src 'self'; connect-src 'self' *.vercel-insights.com;"
  )

  // XSS Protection
  headers.set('X-XSS-Protection', '1; mode=block')

  // Protection against clickjacking
  headers.set('X-Frame-Options', 'DENY')

  // Prevent MIME type sniffing
  headers.set('X-Content-Type-Options', 'nosniff')

  // Referrer Policy
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Permissions Policy
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()')

  return response
}

// Match all request paths except for static files, api routes, and _next files
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
