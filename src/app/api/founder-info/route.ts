import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const founderInfo = await prisma.founderInfo.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(founderInfo)
  } catch (error) {
    console.error('Error fetching founder info:', error)
    return NextResponse.json(
      { error: 'Failed to fetch founder info' },
      { status: 500 }
    )
  }
}
