import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const adminUser = await prisma.adminUser.findUnique({
      where: { 
        email: email,
        isActive: true
      }
    })

    if (!adminUser) {
      return NextResponse.json(
        { error: 'Not an admin user' },
        { status: 403 }
      )
    }

    return NextResponse.json({ 
      success: true,
      adminUser: {
        id: adminUser.id,
        email: adminUser.email,
        name: adminUser.name,
        firstName: adminUser.firstName,
        lastName: adminUser.lastName
      }
    })
  } catch (error) {
    console.error('Admin check error:', error)
    return NextResponse.json(
      { error: 'Failed to check admin status' },
      { status: 500 }
    )
  }
}
