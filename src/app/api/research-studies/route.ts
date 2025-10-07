import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit')
    const slug = searchParams.get('slug')

    if (slug) {
      // Fetch individual research study by slug
      const study = await prisma.researchStudy.findFirst({
        where: {
          slug: slug,
          isActive: true
        }
      })

      if (!study) {
        return NextResponse.json(
          { error: 'Research study not found' },
          { status: 404 }
        )
      }

      return NextResponse.json(study)
    }

    // Fetch all studies or limited number
    const studies = await prisma.researchStudy.findMany({
      where: {
        isActive: true
      },
      orderBy: {
        startDate: 'desc'
      },
      take: limit ? parseInt(limit) : undefined
    })

    return NextResponse.json(studies)
  } catch (error) {
    console.error('Error fetching research studies:', error)
    return NextResponse.json(
      { error: 'Failed to fetch research studies' },
      { status: 500 }
    )
  }
}
