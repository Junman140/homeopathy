import type { Metadata } from 'next'
import { AuthProvider } from '@/components/auth-provider'
import './portal.css'

export const metadata: Metadata = {
  title: 'MOCHAM Portal - Postgraduate Portal',
  description: 'MOCHAM Postgraduate Portal - Your gateway to advanced medical education',
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
