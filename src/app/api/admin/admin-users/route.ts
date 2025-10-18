import { NextRequest, NextResponse } from 'next/server'
import { requireAdminSession } from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    await requireAdminSession()

    const adminUsers = await prisma.adminUser.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(adminUsers)
  } catch (error) {
    console.error('Admin users GET error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch admin users' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAdminSession()

    const body = await request.json()
    const { email, name, firstName, lastName } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Check if admin user already exists
    const existingAdmin = await prisma.adminUser.findUnique({
      where: { email }
    })

    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin user with this email already exists' },
        { status: 400 }
      )
    }

    const adminUser = await prisma.adminUser.create({
      data: {
        email,
        name: name || email.split('@')[0],
        firstName: firstName || name?.split(' ')[0] || email.split('@')[0],
        lastName: lastName || name?.split(' ').slice(1).join(' ') || '',
        isActive: true
      }
    })

    return NextResponse.json(adminUser)
  } catch (error) {
    console.error('Admin user creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create admin user' },
      { status: 500 }
    )
  }
}
