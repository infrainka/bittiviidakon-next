import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const protocol = request.headers.get('x-forwarded-proto') || 'http';

  // Redirect www to non-www
  if (host.startsWith('www.')) {
    const newHost = host.slice(4);
    return NextResponse.redirect(`${protocol}://${newHost}${request.nextUrl.pathname}${request.nextUrl.search}`, {
      status: 301,
    });
  }

  // Redirect HTTP to HTTPS (in production)
  if (protocol === 'http' && process.env.NODE_ENV === 'production') {
    return NextResponse.redirect(`https://${host}${request.nextUrl.pathname}${request.nextUrl.search}`, {
      status: 301,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
