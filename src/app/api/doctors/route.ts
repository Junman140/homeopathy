import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      where: {
        isActive: true
      },
      orderBy: {
        rating: 'desc'
      }
    })

    return NextResponse.json(doctors)
  } catch (error) {
    console.error('Error fetching doctors:', error)
    return NextResponse.json(
      { error: 'Failed to fetch doctors' },
      { status: 500 }
    )
  }
}
