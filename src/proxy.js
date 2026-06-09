import { NextResponse } from "next/server";

export function proxy(request) {
  const sessionToken = request.cookies.get("better-auth.session_token")?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = pathname.startsWith("/profile") || /^\/courses\/\d+$/.test(pathname);
  const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/register");

  if (isProtectedRoute && !sessionToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && sessionToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.startsWith("/api/external-data")) {
    return NextResponse.rewrite(new URL("https://external-service.com", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/courses/:id*", 
    "/profile/:path*",
    "/login",
    "/register",
    "/api/external-data/:path*"
  ],
};
