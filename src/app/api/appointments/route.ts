import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        service: true,
        doctor: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(appointments)
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, serviceId, doctorId, date, time, notes } = body

    const appointment = await prisma.appointment.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        serviceId,
        doctorId,
        date: new Date(date),
        time,
        notes
      },
      include: {
        service: true,
        doctor: true
      }
    })

    return NextResponse.json(appointment, { status: 201 })
  } catch (error) {
    console.error('Error creating appointment:', error)
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    )
  }
}
