import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const legacyAchievements = await prisma.legacyAchievement.findMany({
      orderBy: { year: 'desc' }
    })

    return NextResponse.json(legacyAchievements)
  } catch (error) {
    console.error('Error fetching legacy achievements:', error)
    return NextResponse.json(
      { error: 'Failed to fetch legacy achievements' },
      { status: 500 }
    )
  }
}
