import { NextRequest, NextResponse } from 'next/server';

// This runs on the server, so localStorage won't work — we use cookies.
export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const url = req.nextUrl.clone();

  const protectedRoutes = ['/dashboard', '/setup-profile', '/profile'];
  const pathname = req.nextUrl.pathname;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Tell Next.js where to apply this middleware
export const config = {
  matcher: ['/dashboard/:path*', '/setup-profile/:path*', '/profile/:path*'],
};
