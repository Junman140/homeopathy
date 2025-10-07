import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const collegeHistoryEvents = await prisma.collegeHistoryEvent.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' }
    })

    return NextResponse.json(collegeHistoryEvents)
  } catch (error) {
    console.error('Error fetching college history events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch college history events' },
      { status: 500 }
    )
  }
}
