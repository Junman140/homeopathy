import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const academicProgramsHistory = await prisma.academicProgramHistory.findMany({
      where: { isActive: true },
      orderBy: { facultyName: 'asc' }
    })

    return NextResponse.json(academicProgramsHistory)
  } catch (error) {
    console.error('Error fetching academic programs history:', error)
    return NextResponse.json(
      { error: 'Failed to fetch academic programs history' },
      { status: 500 }
    )
  }
}
