import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, isLocale, type Locale } from '@/lib/i18n'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const segment = pathname.split('/')[1] ?? ''
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  let locale: Locale = defaultLocale
  if (isLocale(segment)) locale = segment
  else if (cookieLocale && isLocale(cookieLocale)) locale = cookieLocale

  if (isLocale(segment)) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = pathname.replace(`/${segment}`, '') || '/'
    const response = NextResponse.redirect(redirectUrl)
    response.cookies.set('NEXT_LOCALE', segment, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    })
    return response
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', locale)
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
