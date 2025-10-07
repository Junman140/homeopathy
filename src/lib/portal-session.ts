// Simple session management for the portal
// In production, this would use proper session tokens and server-side validation

export interface PortalStudent {
  email: string
  regNumber: string
  name: string
  firstName: string
  lastName: string
  phone?: string
  program?: string
  studentId: string
  enrollmentStatus: string
}

const SESSION_KEY = 'portal_session'

export function setPortalSession(student: PortalStudent): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_KEY, JSON.stringify(student))
  }
}

export function getPortalSession(): PortalStudent | null {
  if (typeof window !== 'undefined') {
    const session = localStorage.getItem(SESSION_KEY)
    return session ? JSON.parse(session) : null
  }
  return null
}

export function clearPortalSession(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(SESSION_KEY)
  }
}

// Test student data
export const testStudents: PortalStudent[] = [
  {
    email: 'john.doe@student.mocham.edu',
    regNumber: 'MOCHAM2024001',
    name: 'John Doe',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+2348021234567',
    program: 'Masters in Homeopathic Medicine',
    studentId: 'MOCHAM2024001',
    enrollmentStatus: 'Enrolled'
  },
  {
    email: 'jane.smith@student.mocham.edu',
    regNumber: 'MOCHAM2024002',
    name: 'Jane Smith',
    firstName: 'Jane',
    lastName: 'Smith',
    phone: '+2348021234568',
    program: 'PhD in Homeopathic Medicine',
    studentId: 'MOCHAM2024002',
    enrollmentStatus: 'Enrolled'
  }
]

export function validateStudent(email: string, regNumber: string): PortalStudent | null {
  return testStudents.find(s => 
    s.email === email && s.regNumber === regNumber
  ) || null
}
