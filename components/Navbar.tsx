"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"

export default function Navbar() {
  const { user, status, signOut } = useAuth()
  
  return (
    <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-vibe from-primary via-accent to-purple-500"></div>
          <h1 className="text-2xl font-bold vibe-gradient-text">VibePlay</h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/explore" className="text-sm font-medium hover:text-primary">
            Explore
          </Link>
          <Link href="/tutorials" className="text-sm font-medium hover:text-primary">
            Tutorials
          </Link>
          {/* More navigation links */}
        </nav>
        
        <div className="flex items-center gap-4">
          {status === 'authenticated' ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">Dashboard</Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button className="vibe-button">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

