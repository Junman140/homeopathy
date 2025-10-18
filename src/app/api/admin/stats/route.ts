import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

async function verifyAdminSession(request: NextRequest) {
  // For now, let's make admin APIs accessible without session verification
  // since we're using localStorage on the client side
  // In production, you might want to add proper session verification
  return true
}

export async function GET(request: NextRequest) {
  try {
    // Verify admin access (simplified for now)
    const isAdmin = await verifyAdminSession(request)
    if (!isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

        const [
          programs,
          services,
          doctors,
          news,
          testimonials,
          applications,
          appointments,
          contactMessages,
          publications,
          researchStudies,
          collaborations,
          achievements,
          historyEvents,
          founderInfo,
          collegeHistoryEvents,
          academicProgramsHistory,
          facilityHistory,
          legacyAchievements,
          historicalDocuments,
          users,
          adminUsers,
          studentGrades,
          studentCertificates,
          studentSchedules
        ] = await Promise.all([
          prisma.program.count(),
          prisma.service.count(),
          prisma.doctor.count(),
          prisma.news.count(),
          prisma.testimonial.count(),
          prisma.application.count(),
          prisma.appointment.count(),
          prisma.contactMessage.count(),
          prisma.publication.count(),
          prisma.researchStudy.count(),
          prisma.collaboration.count(),
          prisma.achievement.count(),
          prisma.historyEvent.count(),
          prisma.founderInfo.count(),
          prisma.collegeHistoryEvent.count(),
          prisma.academicProgramHistory.count(),
          prisma.facilityHistory.count(),
          prisma.legacyAchievement.count(),
          prisma.historicalDocument.count(),
          prisma.user.count(),
          prisma.adminUser.count(),
          prisma.studentGrade.count(),
          prisma.studentCertificate.count(),
          prisma.studentSchedule.count()
        ])

        return NextResponse.json({
          programs,
          services,
          doctors,
          news,
          testimonials,
          applications,
          appointments,
          contactMessages,
          publications,
          researchStudies,
          collaborations,
          achievements,
          historyEvents,
          founderInfo,
          collegeHistoryEvents,
          academicProgramsHistory,
          facilityHistory,
          legacyAchievements,
          historicalDocuments,
          users,
          adminUsers,
          studentGrades,
          studentCertificates,
          studentSchedules
        })
  } catch (error) {
    console.error('Admin stats error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}