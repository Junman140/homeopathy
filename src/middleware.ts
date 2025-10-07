import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // Portal authentication is now handled client-side with localStorage
  // No server-side middleware needed for portal routes
  return NextResponse.next()
}

export const config = {
  matcher: []
}
