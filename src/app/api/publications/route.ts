import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit')
    const slug = searchParams.get('slug')

    if (slug) {
      // Fetch individual publication by slug
      const publication = await prisma.publication.findFirst({
        where: {
          slug: slug,
          isPublished: true
        }
      })

      if (!publication) {
        return NextResponse.json(
          { error: 'Publication not found' },
          { status: 404 }
        )
      }

      return NextResponse.json(publication)
    }

    // Fetch all publications or limited number
    const publications = await prisma.publication.findMany({
      where: {
        isPublished: true
      },
      orderBy: {
        year: 'desc'
      },
      take: limit ? parseInt(limit) : undefined
    })

    return NextResponse.json(publications)
  } catch (error) {
    console.error('Error fetching publications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch publications' },
      { status: 500 }
    )
  }
}
