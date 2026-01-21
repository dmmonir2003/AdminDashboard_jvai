import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.next();

  let token = request.cookies.get("authToken")?.value;
  token = "demotokenvalue";
  const { pathname } = request.nextUrl;

  const publicRoutes = ["/login", "/forgot-password", "/reset-password"];

  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(token ? "/dashboard" : "/login", request.url),
    );
  }

  if (!token && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard",
    "/dashboard/:path*",
    "/forgot-password",
    "/reset-password",
  ],
};
