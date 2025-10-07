import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const facilitiesHistory = await prisma.facilityHistory.findMany({
      where: { isActive: true },
      orderBy: { establishedYear: 'asc' }
    })

    return NextResponse.json(facilitiesHistory)
  } catch (error) {
    console.error('Error fetching facilities history:', error)
    return NextResponse.json(
      { error: 'Failed to fetch facilities history' },
      { status: 500 }
    )
  }
}
