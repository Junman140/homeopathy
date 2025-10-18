import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Get all students with their related data
    const students = await prisma.user.findMany({
      include: {
        grades: true,
        certificates: true,
        schedules: true
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(students)
  } catch (error) {
    console.error('Error fetching students:', error)
    return NextResponse.json(
      { error: 'Failed to fetch students' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Create a new student
    const student = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        program: body.program,
        qualifications: body.qualifications,
        studentId: body.studentId,
        enrollmentStatus: body.enrollmentStatus || 'active'
      }
    })

    return NextResponse.json(student)
  } catch (error) {
    console.error('Error creating student:', error)
    return NextResponse.json(
      { error: 'Failed to create student' },
      { status: 500 }
    )
  }
}
