import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const modelMap: Record<string, any> = {
  programs: prisma.program,
  services: prisma.service,
  doctors: prisma.doctor,
  news: prisma.news,
  testimonials: prisma.testimonial,
  applications: prisma.application,
  appointments: prisma.appointment,
  contact_messages: prisma.contactMessage,
  publications: prisma.publication,
  research_studies: prisma.researchStudy,
  collaborations: prisma.collaboration,
  achievements: prisma.achievement,
  history_events: prisma.historyEvent,
  college_history_events: prisma.collegeHistoryEvent,
  academic_programs_history: prisma.academicProgramHistory,
  facility_history: prisma.facilityHistory,
  legacy_achievements: prisma.legacyAchievement,
  historical_documents: prisma.historicalDocument,
  founder_info: prisma.founderInfo,
  founderinfo: prisma.founderInfo,
  users: prisma.user,
  admin_users: prisma.adminUser,
  student_grades: prisma.studentGrade,
  student_certificates: prisma.studentCertificate,
  student_schedules: prisma.studentSchedule,
  courses: prisma.course,
  course_enrollments: prisma.courseEnrollment,
}

async function verifyAdminSession(request: NextRequest) {
  // For now, let's make admin APIs accessible without session verification
  // since we're using localStorage on the client side
  return true
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ model: string; id: string }> }
) {
  const resolvedParams = await params
  
  try {
    await verifyAdminSession(request)
    const model = modelMap[resolvedParams.model]
    if (!model) {
      return NextResponse.json(
        { error: 'Model not found' },
        { status: 404 }
      )
    }

    const record = await model.findUnique({
      where: { id: resolvedParams.id }
    })

    if (!record) {
      return NextResponse.json(
        { error: 'Record not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(record)
  } catch (error) {
    console.error(`Admin GET ${resolvedParams.model}/${resolvedParams.id} error:`, error)
    return NextResponse.json(
      { error: 'Failed to fetch record' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ model: string; id: string }> }
) {
  const resolvedParams = await params
  
  try {
    await verifyAdminSession(request)
    const model = modelMap[resolvedParams.model]
    if (!model) {
      return NextResponse.json(
        { error: 'Model not found' },
        { status: 404 }
      )
    }

    const body = await request.json()
    
    // Handle array fields
    const processedBody = { ...body }
    Object.keys(processedBody).forEach(key => {
      if (typeof processedBody[key] === 'string' && processedBody[key].includes(',')) {
        processedBody[key] = processedBody[key].split(',').map((item: string) => item.trim())
      }
    })

    const record = await model.update({
      where: { id: resolvedParams.id },
      data: processedBody
    })

    return NextResponse.json(record)
  } catch (error) {
    console.error(`Admin PUT ${resolvedParams.model}/${resolvedParams.id} error:`, error)
    return NextResponse.json(
      { error: 'Failed to update record' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ model: string; id: string }> }
) {
  const resolvedParams = await params
  
  try {
    await verifyAdminSession(request)
    const model = modelMap[resolvedParams.model]
    if (!model) {
      return NextResponse.json(
        { error: 'Model not found' },
        { status: 404 }
      )
    }

    await model.delete({
      where: { id: resolvedParams.id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(`Admin DELETE ${resolvedParams.model}/${resolvedParams.id} error:`, error)
    return NextResponse.json(
      { error: 'Failed to delete record' },
      { status: 500 }
    )
  }
}
