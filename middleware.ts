import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (path.startsWith('/team') || path.startsWith('/teams')) {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!token) {
      const newUrl = new URL(
        `/login${
          path !== '/' ? `?callbackUrl=${encodeURIComponent(path)}` : ''
        }`,
        req.nextUrl.href
      );
      return NextResponse.redirect(newUrl);
    }
    //check if user is in team for any /team/* routes
    if (path.startsWith('/team/')) {
      const teamSlug = path.split('/')[2];
      // @ts-ignore
      const team = token.teams.find((t) => t.slug === teamSlug);
      if (!team) {
        const unauthorizedUrl = new URL('/unauthorized', req.nextUrl.href);
        return NextResponse.redirect(unauthorizedUrl);
      }
    }
  }
}
