import { auth } from './auth'
import { headers } from 'next/headers'
import { prisma } from './prisma'

export async function getAdminSession() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  
  if (!session) {
    return null
  }

  // Check if user email exists in AdminUser table
  const adminUser = await prisma.adminUser.findUnique({
    where: { 
      email: session.user.email,
      isActive: true
    }
  })
  
  if (!adminUser) {
    return null
  }

  return session
}

export async function requireAdminSession() {
  const session = await getAdminSession()
  
  if (!session) {
    throw new Error('Unauthorized: Admin access required')
  }
  
  return session
}

export async function isAdminEmail(email: string): Promise<boolean> {
  const adminUser = await prisma.adminUser.findUnique({
    where: { 
      email: email,
      isActive: true
    }
  })
  
  return !!adminUser
}
