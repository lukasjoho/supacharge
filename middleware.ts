import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (path.startsWith('/space')) {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!session) {
      const newUrl = new URL(
        `/login${
          path !== '/' ? `?callbackUrl=${encodeURIComponent(path)}` : ''
        }`,
        req.nextUrl.href
      );
      return NextResponse.redirect(newUrl);
    }
  }
}
