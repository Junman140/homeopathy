'use client'

import { AdminAuthProvider } from '@/components/admin/admin-auth-provider'
import AdminSidebar from '@/components/admin/sidebar'
import { useAdminAuth } from '@/components/admin/admin-auth-provider'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './admin.css'

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const { session, loading, logout } = useAdminAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Loading...</h1>
          <p className="text-gray-600">Checking admin session...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Please Login</h1>
          <p className="text-gray-600 mb-4">You need to login to access the admin dashboard.</p>
          <a 
            href="/admin-login" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Go to Login
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="admin-container">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Sidebar */}
        <div className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <AdminSidebar onLogout={logout} onClose={() => setSidebarOpen(false)} />
        </div>
        
        {/* Main Content */}
        <div className="admin-main">
          <div className="admin-header">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, {session.name || session.email}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AdminAuthProvider>
  )
}