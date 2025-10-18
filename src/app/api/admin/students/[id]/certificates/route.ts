import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const studentId = params.id
    
    // Get certificates for a specific student
    const certificates = await prisma.studentCertificate.findMany({
      where: { userId: studentId },
      include: { user: true },
      orderBy: { issueDate: 'desc' }
    })

    return NextResponse.json(certificates)
  } catch (error) {
    console.error('Error fetching student certificates:', error)
    return NextResponse.json(
      { error: 'Failed to fetch student certificates' },
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
    
    // Create a new certificate for the student
    const certificate = await prisma.studentCertificate.create({
      data: {
        userId: studentId,
        title: body.title,
        description: body.description,
        certificateType: body.certificateType,
        fileUrl: body.fileUrl,
        issueDate: new Date(body.issueDate),
        expiryDate: body.expiryDate ? new Date(body.expiryDate) : null,
        isActive: body.isActive !== undefined ? body.isActive : true,
        uploadedBy: body.uploadedBy // Admin user ID
      },
      include: { user: true }
    })

    return NextResponse.json(certificate)
  } catch (error) {
    console.error('Error creating student certificate:', error)
    return NextResponse.json(
      { error: 'Failed to create student certificate' },
      { status: 500 }
    )
  }
}
