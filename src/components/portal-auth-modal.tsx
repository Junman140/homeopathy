'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, signUp, useSession } from '@/lib/auth-client'

interface PortalAuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PortalAuthModal({ isOpen, onClose }: PortalAuthModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'enroll'>('login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()
  const { data: session } = useSession()

  const [loginForm, setLoginForm] = useState({
    email: '',
    regNumber: ''
  })
  const [enrollForm, setEnrollForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    qualifications: ''
  })

  // Close modal and redirect if logged in
  if (session) {
    onClose()
    router.push('/portal/dashboard')
    return null
  }

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // For demo purposes, we'll use hardcoded test students
      // In production, this would validate against the database
      const testStudents = [
        { email: 'john.doe@student.mocham.edu', regNumber: 'MOCHAM2024001', name: 'John Doe' },
        { email: 'jane.smith@student.mocham.edu', regNumber: 'MOCHAM2024002', name: 'Jane Smith' }
      ]
      
      const student = testStudents.find(s => 
        s.email === loginForm.email && s.regNumber === loginForm.regNumber
      )
      
      if (student) {
        setSuccess('Login successful! Redirecting...')
        setTimeout(() => {
          onClose()
          router.push('/portal/dashboard')
        }, 1000)
      } else {
        setError('Invalid student email or registration number')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // For enrollment, we'll just show success and redirect to main site
      // In a real application, this would save to an applications database
      // and send an email confirmation
      
      setSuccess('Application submitted successfully! You will be contacted soon.')
      
      // Clear the form
      setEnrollForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: '',
        qualifications: ''
      })
      
      // Redirect to main landing page after 2 seconds
      setTimeout(() => {
        onClose()
        window.location.href = '/'
      }, 2000)
      
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="portal-modal-overlay" onClick={handleBackdropClick}>
      <div className="portal-modal-content">
        <button className="portal-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {/* Modal Header */}
        <div className="portal-modal-header">
          <div className="portal-modal-icons">
            <div className="portal-modal-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white"/>
              </svg>
            </div>
            <div className="portal-modal-icon portal-modal-icon-primary">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white"/>
                <path d="M15 11l3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="portal-modal-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white"/>
              </svg>
            </div>
          </div>
          
          <h1 className="portal-modal-title">POSTGRADUATE PORTAL</h1>
          <p className="portal-modal-subtitle">MOCHAM</p>
        </div>

        {/* Tab Buttons */}
        <div className="portal-modal-tabs">
          <button
            className={`portal-modal-tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            <div className="portal-modal-tab-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white"/>
                <path d="M15 11l3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="portal-modal-tab-text">Login</span>
          </button>

          <button
            className={`portal-modal-tab ${activeTab === 'enroll' ? 'active' : ''}`}
            onClick={() => setActiveTab('enroll')}
          >
            <div className="portal-modal-tab-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white"/>
                <path d="M15 11l3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="portal-modal-tab-text">Enrol</span>
          </button>
        </div>

        {/* Login Form */}
        {activeTab === 'login' && (
          <form className="portal-modal-form" onSubmit={handleLoginSubmit}>
            <h2 className="portal-modal-form-title">Student Login</h2>
            
            <div className="portal-modal-form-group">
              <label htmlFor="modal-login-email" className="portal-modal-form-label">Email Address</label>
              <input
                id="modal-login-email"
                type="email"
                className="portal-modal-form-input"
                value={loginForm.email}
                onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                required
                aria-describedby="modal-login-email-error"
              />
            </div>
            
            <div className="portal-modal-form-group">
              <label htmlFor="modal-login-regNumber" className="portal-modal-form-label">Registration Number</label>
              <input
                id="modal-login-regNumber"
                type="text"
                className="portal-modal-form-input"
                value={loginForm.regNumber}
                onChange={(e) => setLoginForm({...loginForm, regNumber: e.target.value})}
                placeholder="e.g., MOCHAM2024001"
                required
                aria-describedby="modal-login-regNumber-error"
              />
            </div>
            
            {error && activeTab === 'login' && (
              <div className="portal-modal-error-message" role="alert" id="modal-login-error">
                {error}
              </div>
            )}
            
            {success && activeTab === 'login' && (
              <div className="portal-modal-success-message" role="status" id="modal-login-success">
                {success}
              </div>
            )}
            
            <button type="submit" className="portal-modal-form-button" disabled={loading}>
              {loading ? 'Signing In...' : 'Login to Portal'}
            </button>
            
            <div className="portal-modal-form-links">
              <a href="#" className="portal-modal-form-link">Forgot Password?</a>
              <br />
              <a href="#" className="portal-modal-form-link">Need Help?</a>
            </div>
          </form>
        )}

        {/* Enroll Form */}
        {activeTab === 'enroll' && (
          <form className="portal-modal-form" onSubmit={handleEnrollSubmit}>
            <h2 className="portal-modal-form-title">New Student Enrollment</h2>
            
            <div className="portal-modal-form-group">
              <label htmlFor="modal-enroll-firstName" className="portal-modal-form-label">First Name</label>
              <input
                id="modal-enroll-firstName"
                type="text"
                className="portal-modal-form-input"
                value={enrollForm.firstName}
                onChange={(e) => setEnrollForm({...enrollForm, firstName: e.target.value})}
                required
                aria-describedby="modal-enroll-firstName-error"
              />
            </div>
            
            <div className="portal-modal-form-group">
              <label htmlFor="modal-enroll-lastName" className="portal-modal-form-label">Last Name</label>
              <input
                id="modal-enroll-lastName"
                type="text"
                className="portal-modal-form-input"
                value={enrollForm.lastName}
                onChange={(e) => setEnrollForm({...enrollForm, lastName: e.target.value})}
                required
                aria-describedby="modal-enroll-lastName-error"
              />
            </div>
            
            <div className="portal-modal-form-group">
              <label htmlFor="modal-enroll-email" className="portal-modal-form-label">Email Address</label>
              <input
                id="modal-enroll-email"
                type="email"
                className="portal-modal-form-input"
                value={enrollForm.email}
                onChange={(e) => setEnrollForm({...enrollForm, email: e.target.value})}
                required
                aria-describedby="modal-enroll-email-error"
              />
            </div>
            
            <div className="portal-modal-form-group">
              <label htmlFor="modal-enroll-phone" className="portal-modal-form-label">Phone Number</label>
              <input
                id="modal-enroll-phone"
                type="tel"
                className="portal-modal-form-input"
                value={enrollForm.phone}
                onChange={(e) => setEnrollForm({...enrollForm, phone: e.target.value})}
                required
                aria-describedby="modal-enroll-phone-error"
              />
            </div>
            
            <div className="portal-modal-form-group">
              <label htmlFor="modal-enroll-program" className="portal-modal-form-label">Program of Interest</label>
              <select
                id="modal-enroll-program"
                className="portal-modal-form-input"
                value={enrollForm.program}
                onChange={(e) => setEnrollForm({...enrollForm, program: e.target.value})}
                required
                aria-describedby="modal-enroll-program-error"
              >
                <option value="">Select Program</option>
                <option value="masters">Masters in Homeopathic Medicine</option>
                <option value="phd">PhD in Homeopathic Medicine</option>
                <option value="diploma">Diploma in Homeopathic Medicine</option>
                <option value="certificate">Certificate Programs</option>
              </select>
            </div>
            
            <div className="portal-modal-form-group">
              <label htmlFor="modal-enroll-qualifications" className="portal-modal-form-label">Previous Qualifications</label>
              <textarea
                id="modal-enroll-qualifications"
                className="portal-modal-form-input"
                rows={3}
                value={enrollForm.qualifications}
                onChange={(e) => setEnrollForm({...enrollForm, qualifications: e.target.value})}
                placeholder="Please describe your educational background and relevant experience"
                required
                aria-describedby="modal-enroll-qualifications-error"
              />
            </div>
            
            
            {error && activeTab === 'enroll' && (
              <div className="portal-modal-error-message" role="alert" id="modal-enroll-error">
                {error}
              </div>
            )}
            
            {success && activeTab === 'enroll' && (
              <div className="portal-modal-success-message" role="status" id="modal-enroll-success">
                {success}
              </div>
            )}
            
            <button type="submit" className="portal-modal-form-button" disabled={loading}>
              {loading ? 'Creating Account...' : 'Submit Enrollment Application'}
            </button>
            
            <div className="portal-modal-form-links">
              <a href="#" className="portal-modal-form-link">View Admission Requirements</a>
              <br />
              <a href="#" className="portal-modal-form-link">Contact Admissions Office</a>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
