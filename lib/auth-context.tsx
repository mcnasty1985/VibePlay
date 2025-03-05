"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"

type AuthContextType = {
  user: any
  status: "loading" | "authenticated" | "unauthenticated"
  signIn: (provider: string, options?: any) => Promise<any>
  signOut: () => Promise<any>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }) {
  const { data: session, status } = useSession()

  return (
    <AuthContext.Provider
      value={{
        user: session?.user ?? null,
        status,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)