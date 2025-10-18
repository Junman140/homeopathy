'use client'

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600 mt-2">MOCHAM Admin Dashboard</p>
          </div>

          <form onSubmit={async (e) => {
            e.preventDefault()
            const formData = new FormData(e.target as HTMLFormElement)
            const email = formData.get('email') as string
            
            try {
              const response = await fetch('/api/admin/check-admin', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
              })

              if (response.ok) {
                const result = await response.json()
                
                // Store admin session in localStorage
                localStorage.setItem('adminSession', JSON.stringify({
                  email: result.adminUser.email,
                  name: result.adminUser.name,
                  loginTime: Date.now()
                }))
                
                // Redirect to admin dashboard
                window.location.href = '/admin'
              } else {
                alert('Access denied. This email is not registered as an admin.')
              }
            } catch (error) {
              console.error('Login error:', error)
              alert('An unexpected error occurred')
            }
          }} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Admin Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="admin@mocham.edu"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Only registered administrators can access this dashboard.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Contact your system administrator if you need access.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}