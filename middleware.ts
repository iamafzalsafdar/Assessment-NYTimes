import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const period = searchParams.get('period')

  if (request.nextUrl.pathname === '/') {
    const url = request.nextUrl.clone()

    if (!period || !['1', '7', '30'].includes(period)) {
      url.searchParams.set('period', '1')
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
