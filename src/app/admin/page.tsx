'use client'

import { useEffect, useState } from 'react'
import StatsCard from '@/components/admin/stats-card'
import { Card } from '@/components/ui/card'

interface DashboardStats {
  programs: number
  services: number
  doctors: number
  news: number
  testimonials: number
  applications: number
  appointments: number
  contactMessages: number
  publications: number
  researchStudies: number
  collaborations: number
  achievements: number
  historyEvents: number
  founderInfo: number
  collegeHistoryEvents: number
  academicProgramsHistory: number
  facilityHistory: number
  legacyAchievements: number
  historicalDocuments: number
  users: number
  adminUsers: number
  studentGrades: number
  studentCertificates: number
  studentSchedules: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    programs: 0,
    services: 0,
    doctors: 0,
    news: 0,
    testimonials: 0,
    applications: 0,
    appointments: 0,
    contactMessages: 0,
    publications: 0,
    researchStudies: 0,
    collaborations: 0,
    achievements: 0,
    historyEvents: 0,
    founderInfo: 0,
    collegeHistoryEvents: 0,
    academicProgramsHistory: 0,
    facilityHistory: 0,
    legacyAchievements: 0,
    historicalDocuments: 0,
    users: 0,
    adminUsers: 0,
    studentGrades: 0,
    studentCertificates: 0,
    studentSchedules: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/stats')
        if (response.ok) {
          const data = await response.json()
          setStats(data)
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="admin-stats-grid">
        <StatsCard
          title="Academic Programs"
          value={stats.programs}
          icon="🎓"
          description="Total programs offered"
        />
        <StatsCard
          title="Medical Services"
          value={stats.services}
          icon="🏥"
          description="Available services"
        />
        <StatsCard
          title="Medical Practitioners"
          value={stats.doctors}
          icon="👨‍⚕️"
          description="Active doctors"
        />
        <StatsCard
          title="News Articles"
          value={stats.news}
          icon="📰"
          description="Published articles"
        />
        <StatsCard
          title="Student Applications"
          value={stats.applications}
          icon="📝"
          description="Pending applications"
        />
        <StatsCard
          title="Patient Appointments"
          value={stats.appointments}
          icon="📅"
          description="Scheduled appointments"
        />
        <StatsCard
          title="Contact Messages"
          value={stats.contactMessages}
          icon="📧"
          description="Unread messages"
        />
        <StatsCard
          title="Research Publications"
          value={stats.publications}
          icon="📚"
          description="Published research"
        />
        <StatsCard
          title="Testimonials"
          value={stats.testimonials}
          icon="💬"
          description="Patient testimonials"
        />
        <StatsCard
          title="Research Studies"
          value={stats.researchStudies}
          icon="🔬"
          description="Active studies"
        />
        <StatsCard
          title="Collaborations"
          value={stats.collaborations}
          icon="🤝"
          description="Research partnerships"
        />
        <StatsCard
          title="Achievements"
          value={stats.achievements}
          icon="🏆"
          description="College achievements"
        />
        <StatsCard
          title="History Events"
          value={stats.historyEvents}
          icon="📅"
          description="Timeline events"
        />
        <StatsCard
          title="Founder Info"
          value={stats.founderInfo}
          icon="👤"
          description="Founder records"
        />
        <StatsCard
          title="College History"
          value={stats.collegeHistoryEvents}
          icon="🏛️"
          description="Historical events"
        />
        <StatsCard
          title="Academic Programs History"
          value={stats.academicProgramsHistory}
          icon="📖"
          description="Program history"
        />
        <StatsCard
          title="Facility History"
          value={stats.facilityHistory}
          icon="🏢"
          description="Infrastructure history"
        />
        <StatsCard
          title="Legacy Achievements"
          value={stats.legacyAchievements}
          icon="⭐"
          description="Legacy records"
        />
        <StatsCard
          title="Historical Documents"
          value={stats.historicalDocuments}
          icon="📄"
          description="Archived documents"
        />
        <StatsCard
          title="Students"
          value={stats.users}
          icon="👥"
          description="Registered students"
        />
        <StatsCard
          title="Admin Users"
          value={stats.adminUsers}
          icon="👨‍💼"
          description="System administrators"
        />
        <StatsCard
          title="Student Grades"
          value={stats.studentGrades}
          icon="📊"
          description="Grade records uploaded"
        />
        <StatsCard
          title="Student Certificates"
          value={stats.studentCertificates}
          icon="🎓"
          description="Certificates issued"
        />
        <StatsCard
          title="Student Schedules"
          value={stats.studentSchedules}
          icon="📅"
          description="Schedule entries created"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-sm text-gray-600">New student application</span>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-sm text-gray-600">Appointment scheduled</span>
              <span className="text-xs text-gray-500">4 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <span className="text-sm text-gray-600">News article published</span>
              <span className="text-xs text-gray-500">1 day ago</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <a href="/admin/news/new" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium">Create News Article</span>
            </a>
            <a href="/admin/applications" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium">Review Applications</span>
            </a>
            <a href="/admin/appointments" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium">Manage Appointments</span>
            </a>
            <a href="/admin/contact_messages" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-sm font-medium">View Contact Messages</span>
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}
