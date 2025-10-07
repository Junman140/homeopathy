import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const collaborations = await prisma.collaboration.findMany({
      where: {
        isActive: true
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

    return NextResponse.json(collaborations)
  } catch (error) {
    console.error('Error fetching collaborations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch collaborations' },
      { status: 500 }
    )
  }
}
