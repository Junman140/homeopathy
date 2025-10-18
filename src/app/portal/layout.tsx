import type { Metadata } from 'next'
import { AuthProvider } from '@/components/auth-provider'
import './portal.css'

export const metadata: Metadata = {
  title: 'MOCHAM Portal - Undergraduate Portal',
  description: 'MOCHAM Undergraduate Portal - Your gateway to comprehensive medical education',
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="portal-body">
      <AuthProvider>
        {children}
      </AuthProvider>
    </div>
  )
}
