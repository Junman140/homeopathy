import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const studentId = params.id
    
    // Get grades for a specific student
    const grades = await prisma.studentGrade.findMany({
      where: { userId: studentId },
      include: { user: true },
      orderBy: [
        { academicYear: 'desc' },
        { semester: 'desc' },
        { courseName: 'asc' }
      ]
    })

    return NextResponse.json(grades)
  } catch (error) {
    console.error('Error fetching student grades:', error)
    return NextResponse.json(
      { error: 'Failed to fetch student grades' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const studentId = params.id
    const body = await request.json()
    
    // Create a new grade for the student
    const grade = await prisma.studentGrade.create({
      data: {
        userId: studentId,
        courseName: body.courseName,
        courseCode: body.courseCode,
        semester: body.semester,
        academicYear: body.academicYear,
        grade: body.grade,
        score: body.score,
        maxScore: body.maxScore,
        comments: body.comments,
        uploadedBy: body.uploadedBy // Admin user ID
      },
      include: { user: true }
    })

    return NextResponse.json(grade)
  } catch (error) {
    console.error('Error creating student grade:', error)
    return NextResponse.json(
      { error: 'Failed to create student grade' },
      { status: 500 }
    )
  }
}
