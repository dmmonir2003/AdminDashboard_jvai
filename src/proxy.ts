import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

  // LOGS WILL NOW APPEAR IN TERMINAL
  console.log("--- Middleware Executing ---");
  console.log("Path:", pathname);
  console.log("Token Found:", !!token);

  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/auctions") ||
    pathname.startsWith("/products") ||
    pathname.startsWith("/categories") ||
    pathname.startsWith("/users") ||
    pathname.startsWith("/coins") ||
    pathname.startsWith("/orders") ||
    pathname.startsWith("/users") ||
    // pathname.startsWith("/announcements") ||
    // pathname.startsWith("/reviews") ||
    pathname.startsWith("/profile");

  const isAuthRoute = pathname === "/login" || pathname === "/register";

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // "/dashboard",
    "/dashboard/:path*",
    "/auctions/:path*",
    "/users/:path*",
    "/products/:path*",
    "/categories/:path*",
    "/coins/:path*",
    "/orders/:path*",
    "/login",
    "/register",
    "/profile/:path*",
  ],
};
