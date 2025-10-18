'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface AdminSession {
  email: string
  name: string
  loginTime: number
}

interface AdminAuthContextType {
  session: AdminSession | null
  loading: boolean
  logout: () => void
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined)

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AdminSession | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for admin session in localStorage
    const checkSession = () => {
      try {
        const adminSession = localStorage.getItem('adminSession')
        if (adminSession) {
          const sessionData = JSON.parse(adminSession)
          // Check if session is not expired (24 hours)
          const isExpired = Date.now() - sessionData.loginTime > 24 * 60 * 60 * 1000
          if (!isExpired) {
            setSession(sessionData)
          } else {
            localStorage.removeItem('adminSession')
            setSession(null)
          }
        } else {
          setSession(null)
        }
      } catch (error) {
        console.error('Session check failed:', error)
        localStorage.removeItem('adminSession')
        setSession(null)
      } finally {
        setLoading(false)
      }
    }

    checkSession()
  }, [])

  const logout = () => {
    localStorage.removeItem('adminSession')
    setSession(null)
    window.location.href = '/admin/login'
  }

  return (
    <AdminAuthContext.Provider value={{ session, loading, logout }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext)
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider')
  }
  return context
}