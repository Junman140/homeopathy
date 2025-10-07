import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const news = await prisma.news.findMany({
      where: {
        isPublished: true
      },
      orderBy: {
        publishedAt: 'desc'
      },
      take: 6 // Limit to 6 most recent articles
    })

    return NextResponse.json(news)
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    )
  }
}
