import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const historyEvents = await prisma.historyEvent.findMany({
      where: {
        isActive: true
      },
      orderBy: {
        year: 'asc'
      }
    })

    return NextResponse.json(historyEvents)
  } catch (error) {
    console.error('Error fetching history events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch history events' },
      { status: 500 }
    )
  }
}
