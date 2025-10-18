'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getPortalSession, clearPortalSession, type PortalStudent } from '@/lib/portal-session'

export default function PortalDashboard() {
  const [activeTab, setActiveTab] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [student, setStudent] = useState<PortalStudent | null>(null)
  const [loading, setLoading] = useState(true)
  const [grades, setGrades] = useState<any[]>([])
  const [certificates, setCertificates] = useState<any[]>([])
  const [schedules, setSchedules] = useState<any[]>([])
  const [courses, setCourses] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    // Check for session on mount
    const session = getPortalSession()
    if (!session) {
      router.push('/portal')
    } else {
      setStudent(session)
      // Fetch student data when session is available
      fetchStudentData(session.id)
    }
    setLoading(false)
  }, [router])

  const fetchStudentData = async (studentId: string) => {
    try {
      // Fetch grades
      const gradesResponse = await fetch(`/api/student/grades?studentId=${studentId}`)
      if (gradesResponse.ok) {
        const gradesData = await gradesResponse.json()
        setGrades(gradesData)
      }

      // Fetch certificates
      const certificatesResponse = await fetch(`/api/student/certificates?studentId=${studentId}`)
      if (certificatesResponse.ok) {
        const certificatesData = await certificatesResponse.json()
        setCertificates(certificatesData)
      }

      // Fetch schedules
      const schedulesResponse = await fetch(`/api/student/schedules?studentId=${studentId}`)
      if (schedulesResponse.ok) {
        const schedulesData = await schedulesResponse.json()
        setSchedules(schedulesData)
      }

      // Fetch courses
      const coursesResponse = await fetch(`/api/student/courses?studentId=${studentId}`)
      if (coursesResponse.ok) {
        const coursesData = await coursesResponse.json()
        setCourses(coursesData)
      }
    } catch (error) {
      console.error('Error fetching student data:', error)
    }
  }

  const handleLogout = () => {
    clearPortalSession()
    router.push('/portal')
  }

  if (loading) {
    return (
      <div className="portal-dashboard">
        <div className="portal-loading-container">
          Loading...
        </div>
      </div>
    )
  }

  if (!student) {
    return null
  }

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'courses', label: 'Courses', icon: '📚' },
    { id: 'grades', label: 'Grades', icon: '📊' },
    { id: 'schedule', label: 'Schedule', icon: '📅' },
    { id: 'certificates', label: 'Certificates', icon: '🎓' }
  ]

  return (
    <div className={`portal-dashboard ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="portal-dashboard-header">
        <div className="portal-dashboard-nav">
          <div className="portal-dashboard-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" fill="#10b981" stroke="white" strokeWidth="2"/>
              <path d="M10 16l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Student Desk</span>
          </div>
          
          <div className="portal-dashboard-user">
            <span>Welcome, {student.firstName || student.name || 'Student'}</span>
            <button 
              className="portal-dark-mode-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️' : '🌙'} Dark Mode
            </button>
            <button onClick={handleLogout} className="portal-logout">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="portal-dashboard-content">
        {/* Sidebar */}
        <aside className="portal-dashboard-sidebar">
          <nav className="portal-dashboard-nav-menu">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`portal-nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="portal-nav-icon">{item.icon}</span>
                <span className="portal-nav-label">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="portal-dashboard-main">
          {activeTab === 'home' && (
            <div className="portal-home-content">
              <h1>Welcome to Student Portal</h1>
              <p>in MOCHAM, we make your dream become a reality, through our progressive framework</p>
              
              <div className="portal-quick-actions">
                <div className="portal-action-card">
                  <h3>📚 My Courses</h3>
                  <p>View your enrolled courses and academic progress</p>
                  <button onClick={() => setActiveTab('courses')}>View Courses</button>
                </div>
                
                <div className="portal-action-card">
                  <h3>📊 Grades & Results</h3>
                  <p>Check your academic performance and grades</p>
                  <button onClick={() => setActiveTab('grades')}>View Grades</button>
                </div>
                
                <div className="portal-action-card">
                  <h3>📅 Class Schedule</h3>
                  <p>View your upcoming classes and important dates</p>
                  <button onClick={() => setActiveTab('schedule')}>View Schedule</button>
                </div>
                
                <div className="portal-action-card">
                  <h3>🎓 My Certificates</h3>
                  <p>View your earned certificates and achievements</p>
                  <button onClick={() => setActiveTab('certificates')}>View Certificates</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="portal-profile-content">
              <h1>Student Profile</h1>
              <div className="portal-profile-card">
                <div className="portal-profile-avatar">
                  <span>👤</span>
                </div>
                <div className="portal-profile-info">
                  <h2>{student.firstName} {student.lastName}</h2>
                  <p>Undergraduate Student</p>
                  <p>MOCHAM - {student.program || 'Homeopathic Medicine'}</p>
                  <p>Student ID: {student.studentId || 'Pending Assignment'}</p>
                  <p>Email: {student.email}</p>
                  {student.phone && <p>Phone: {student.phone}</p>}
                  <p>Enrollment Status: {student.enrollmentStatus || 'Pending'}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="portal-courses-content">
              <h1>My Courses</h1>
              {courses.length > 0 ? (
                <div className="portal-course-list">
                  {courses.map((enrollment, index) => {
                    const course = enrollment.course
                    const progressPercentage = enrollment.status === 'completed' ? 100 : 
                                             enrollment.status === 'active' ? 75 : 0
                    
                    return (
                      <div key={index} className="portal-course-card">
                        <h3>{course.title}</h3>
                        <p>Course Code: {course.code}</p>
                        <p>Instructor: {course.instructor || 'TBA'}</p>
                        <p>Credits: {course.credits}</p>
                        <p>Status: <span className={`status-${enrollment.status}`}>{enrollment.status}</span></p>
                        {enrollment.finalGrade && (
                          <p>Final Grade: <strong>{enrollment.finalGrade}</strong></p>
                        )}
                        <div className="portal-course-progress">
                          <div className="portal-progress-bar">
                            <div 
                              className={`portal-course-progress-fill-${progressPercentage}`}
                              style={{ width: `${progressPercentage}%` }}
                            ></div>
                          </div>
                          <span>{progressPercentage}% Complete</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="portal-no-data">
                  <p>No courses enrolled yet. Contact your academic advisor to enroll in courses.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'grades' && (
            <div className="portal-grades-content">
              <h1>Grades & Results</h1>
              {grades.length > 0 ? (
                <div className="portal-grades-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Code</th>
                        <th>Semester</th>
                        <th>Grade</th>
                        <th>Score</th>
                        <th>Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grades.map((grade, index) => (
                        <tr key={index}>
                          <td>{grade.courseName}</td>
                          <td>{grade.courseCode}</td>
                          <td>{grade.semester}</td>
                          <td>{grade.grade}</td>
                          <td>{grade.score ? `${grade.score}${grade.maxScore ? `/${grade.maxScore}` : ''}` : 'N/A'}</td>
                          <td>{grade.academicYear}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="portal-no-data">
                  <p>No grades have been uploaded yet. Check back later or contact your instructor.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="portal-schedule-content">
              <h1>Class Schedule</h1>
              {schedules.length > 0 ? (
                <div className="portal-schedule-calendar">
                  {schedules.map((schedule, index) => (
                    <div key={index} className="portal-schedule-item">
                      <h3>{schedule.title}</h3>
                      {schedule.courseName && <p>Course: {schedule.courseName}</p>}
                      {schedule.courseCode && <p>Code: {schedule.courseCode}</p>}
                      <p>{schedule.dayOfWeek}</p>
                      <p>{schedule.startTime} - {schedule.endTime}</p>
                      {schedule.location && <p>Room: {schedule.location}</p>}
                      {schedule.instructor && <p>Instructor: {schedule.instructor}</p>}
                      <p>Type: {schedule.scheduleType}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="portal-no-data">
                  <p>No schedule has been uploaded yet. Check back later or contact your instructor.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="portal-certificates-content">
              <h1>My Certificates</h1>
              {certificates.length > 0 ? (
                <div className="portal-certificates-list">
                  {certificates.map((certificate, index) => (
                    <div key={index} className="portal-certificate-item">
                      <h3>
                        {certificate.certificateType === 'degree' && '🎓 '}
                        {certificate.certificateType === 'diploma' && '📜 '}
                        {certificate.certificateType === 'certificate' && '🏆 '}
                        {certificate.certificateType === 'transcript' && '📄 '}
                        {certificate.certificateType === 'completion' && '✅ '}
                        {certificate.title}
                      </h3>
                      <p>Type: {certificate.certificateType}</p>
                      <p>Issued: {new Date(certificate.issueDate).toLocaleDateString()}</p>
                      {certificate.expiryDate && (
                        <p>Expires: {new Date(certificate.expiryDate).toLocaleDateString()}</p>
                      )}
                      {certificate.description && <p>{certificate.description}</p>}
                      <p>Status: {certificate.isActive ? 'Active' : 'Inactive'}</p>
                      <button onClick={() => window.open(certificate.fileUrl, '_blank')}>
                        Download Certificate
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="portal-no-data">
                  <p>No certificates have been uploaded yet. Contact your instructor or administrator.</p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
