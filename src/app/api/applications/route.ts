import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const applications = await prisma.application.findMany({
      include: {
        program: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(applications)
  } catch (error) {
    console.error('Error fetching applications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, programId, documents, notes } = body

    const application = await prisma.application.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        programId,
        documents,
        notes
      },
      include: {
        program: true
      }
    })

    return NextResponse.json(application, { status: 201 })
  } catch (error) {
    console.error('Error creating application:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}
