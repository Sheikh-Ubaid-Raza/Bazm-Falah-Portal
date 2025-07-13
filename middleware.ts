import { NextResponse, type NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

// Routes that should be protected
const protectedRoutes = ["/members", "/donation", "/ledger"]

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Check if the current path starts with any of the protected routes
  const requiresAuth = protectedRoutes.some((path) => pathname.startsWith(path))

  // If the route does not require authentication, let the request proceed
  if (!requiresAuth) {
    return NextResponse.next()
  }

  // Attempt to get the session token from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET }) // Standardized to NEXTAUTH_SECRET

  // If no token is found (user is not authenticated), redirect to the login page
  if (!token) {
    const loginUrl = req.nextUrl.clone()
    loginUrl.pathname = "/login" // Corrected path to match NextAuth config
    // Add a callbackUrl to redirect the user back to their intended page after successful login
    loginUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // If a token is found (user is authenticated), allow the request to proceed
  return NextResponse.next()
}

// Define the matcher to specify which paths the middleware should run on.
// This ensures the middleware only runs for relevant routes, optimizing performance.
export const config = {
  matcher: ["/members/:path*", "/donation/:path*", "/ledger/:path*"],
}
