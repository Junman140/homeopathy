'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signOut } from '@/lib/auth-client'

export default function PortalDashboard() {
  const [activeTab, setActiveTab] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const { data: session, isPending } = useSession()
  const router = useRouter()

  const handleLogout = async () => {
    // For demo purposes, just redirect to portal landing page
    router.push('/portal')
  }

  if (isPending) {
    return (
      <div className="portal-dashboard">
        <div className="portal-loading-container">
          Loading...
        </div>
      </div>
    )
  }

  if (!session) {
    router.push('/portal/auth')
    return null
  }

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'courses', label: 'Courses', icon: '📚' },
    { id: 'grades', label: 'Grades', icon: '📊' },
    { id: 'schedule', label: 'Schedule', icon: '📅' },
    { id: 'library', label: 'Library', icon: '📖' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
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
            <span>Welcome, {(session.user as any).firstName || session.user.name || 'Student'}</span>
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
                  <h3>📖 Digital Library</h3>
                  <p>Access academic resources and research materials</p>
                  <button onClick={() => setActiveTab('library')}>Access Library</button>
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
                  <h2>{(session.user as any).firstName} {(session.user as any).lastName}</h2>
                  <p>Postgraduate Student</p>
                  <p>MOCHAM - {(session.user as any).program || 'Homeopathic Medicine'}</p>
                  <p>Student ID: {(session.user as any).studentId || 'Pending Assignment'}</p>
                  <p>Email: {session.user.email}</p>
                  {(session.user as any).phone && <p>Phone: {(session.user as any).phone}</p>}
                  <p>Enrollment Status: {(session.user as any).enrollmentStatus || 'Pending'}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="portal-courses-content">
              <h1>My Courses</h1>
              <div className="portal-course-list">
                <div className="portal-course-card">
                  <h3>Advanced Homeopathic Medicine</h3>
                  <p>Course Code: AHM501</p>
                  <p>Instructor: Dr. Smith</p>
                  <div className="portal-course-progress">
                    <div className="portal-progress-bar">
                      <div className="portal-course-progress-fill-75"></div>
                    </div>
                    <span>75% Complete</span>
                  </div>
                </div>
                
                <div className="portal-course-card">
                  <h3>Research Methodology</h3>
                  <p>Course Code: RM502</p>
                  <p>Instructor: Dr. Johnson</p>
                  <div className="portal-course-progress">
                    <div className="portal-progress-bar">
                      <div className="portal-course-progress-fill-45"></div>
                    </div>
                    <span>45% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'grades' && (
            <div className="portal-grades-content">
              <h1>Grades & Results</h1>
              <div className="portal-grades-table">
                <table>
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Assignment</th>
                      <th>Grade</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Advanced Homeopathic Medicine</td>
                      <td>Midterm Exam</td>
                      <td>85%</td>
                      <td>Completed</td>
                    </tr>
                    <tr>
                      <td>Research Methodology</td>
                      <td>Research Proposal</td>
                      <td>92%</td>
                      <td>Completed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="portal-schedule-content">
              <h1>Class Schedule</h1>
              <div className="portal-schedule-calendar">
                <div className="portal-schedule-item">
                  <h3>Advanced Homeopathic Medicine</h3>
                  <p>Monday, Wednesday, Friday</p>
                  <p>9:00 AM - 11:00 AM</p>
                  <p>Room: AH-101</p>
                </div>
                
                <div className="portal-schedule-item">
                  <h3>Research Methodology</h3>
                  <p>Tuesday, Thursday</p>
                  <p>2:00 PM - 4:00 PM</p>
                  <p>Room: RM-205</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'library' && (
            <div className="portal-library-content">
              <h1>Digital Library</h1>
              <div className="portal-library-search">
                <input type="text" placeholder="Search books, journals, articles..." />
                <button>Search</button>
              </div>
              
              <div className="portal-library-categories">
                <div className="portal-library-category">
                  <h3>📚 Textbooks</h3>
                  <p>Access your course textbooks and reference materials</p>
                </div>
                
                <div className="portal-library-category">
                  <h3>📄 Journals</h3>
                  <p>Browse academic journals and research papers</p>
                </div>
                
                <div className="portal-library-category">
                  <h3>🔬 Research Papers</h3>
                  <p>Find relevant research papers for your studies</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="portal-messages-content">
              <h1>Messages</h1>
              <div className="portal-messages-list">
                <div className="portal-message-item">
                  <h3>Welcome to MOCHAM Portal</h3>
                  <p>Welcome to the postgraduate portal. We're excited to have you as part of our community.</p>
                  <span>2 hours ago</span>
                </div>
                
                <div className="portal-message-item">
                  <h3>Course Registration Reminder</h3>
                  <p>Don't forget to register for your courses for the upcoming semester.</p>
                  <span>1 day ago</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="portal-settings-content">
              <h1>Settings</h1>
              <div className="portal-settings-sections">
                <div className="portal-settings-section">
                  <h3>Account Settings</h3>
                  <button>Update Profile</button>
                  <button>Change Password</button>
                </div>
                
                <div className="portal-settings-section">
                  <h3>Notifications</h3>
                  <button>Email Notifications</button>
                  <button>SMS Notifications</button>
                </div>
                
                <div className="portal-settings-section">
                  <h3>Privacy</h3>
                  <button>Privacy Settings</button>
                  <button>Data Export</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
