import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const documents = await prisma.historicalDocument.findMany({
      orderBy: { year: 'desc' }
    })

    return NextResponse.json(documents)
  } catch (error) {
    console.error('Error fetching historical documents:', error)
    return NextResponse.json(
      { error: 'Failed to fetch historical documents' },
      { status: 500 }
    )
  }
}