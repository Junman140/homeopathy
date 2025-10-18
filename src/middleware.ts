import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // Portal authentication is now handled client-side with localStorage
  // No server-side middleware needed for portal routes
  
  // Admin route protection - simple check for admin session
  if (request.nextUrl.pathname.startsWith('/admin') && request.nextUrl.pathname !== '/admin-login') {
    // For admin routes, let the client-side handle the auth
    // The admin layout will check localStorage and redirect if needed
    return NextResponse.next()
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
