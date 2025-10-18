import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params
    const studentId = resolvedParams.id
    
    // Get schedules for a specific student
    const schedules = await prisma.studentSchedule.findMany({
      where: { userId: studentId },
      include: { user: true },
      orderBy: [
        { dayOfWeek: 'asc' },
        { startTime: 'asc' }
      ]
    })

    return NextResponse.json(schedules)
  } catch (error) {
    console.error('Error fetching student schedules:', error)
    return NextResponse.json(
      { error: 'Failed to fetch student schedules' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params
    const studentId = resolvedParams.id
    const body = await request.json()
    
    // Create a new schedule for the student
    const schedule = await prisma.studentSchedule.create({
      data: {
        userId: studentId,
        title: body.title,
        description: body.description,
        courseCode: body.courseCode,
        courseName: body.courseName,
        instructor: body.instructor,
        location: body.location,
        startTime: body.startTime,
        endTime: body.endTime,
        dayOfWeek: body.dayOfWeek,
        date: body.date ? new Date(body.date) : null,
        scheduleType: body.scheduleType,
        semester: body.semester,
        academicYear: body.academicYear,
        isActive: body.isActive !== undefined ? body.isActive : true,
        createdBy: body.createdBy // Admin user ID
      },
      include: { user: true }
    })

    return NextResponse.json(schedule)
  } catch (error) {
    console.error('Error creating student schedule:', error)
    return NextResponse.json(
      { error: 'Failed to create student schedule' },
      { status: 500 }
    )
  }
}
