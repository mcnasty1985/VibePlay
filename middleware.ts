import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // Get pathname
    const path = req.nextUrl.pathname
    
    // Get user from token
    const user = req.nextauth.token
    
    // Check if requesting a creator or premium route
    const isCreatorRoute = path.startsWith("/creator-settings") || path.startsWith("/monetization")
    const isPremiumRoute = path.startsWith("/subscriptions")
    
    // Redirect based on subscription level
    if (isCreatorRoute && user?.plan !== "Vibe Pro+") {
      return NextResponse.redirect(new URL("/upgrade", req.url))
    }
    
    if (isPremiumRoute && user?.plan === "Basic Vibe") {
      return NextResponse.redirect(new URL("/upgrade", req.url))
    }
    
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
)

// Specify which paths should be protected
export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/creator-settings/:path*", 
    "/monetization/:path*",
    "/subscriptions/:path*"
  ]
}