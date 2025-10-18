'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import DataTable from '@/components/admin/data-table'

const modelConfigs: Record<string, { columns: any[], searchFields: string[] }> = {
  programs: {
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'type', label: 'Type' },
      { key: 'level', label: 'Level' },
      { key: 'duration', label: 'Duration' },
      { key: 'capacity', label: 'Capacity' },
      { 
        key: 'isAccredited', 
        label: 'Accredited',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'type', 'level']
  },
  services: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'category', label: 'Category' },
      { key: 'price', label: 'Price' },
      { key: 'duration', label: 'Duration' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['name', 'description', 'category']
  },
  doctors: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'title', label: 'Title' },
      { key: 'specialization', label: 'Specialization' },
      { key: 'experience', label: 'Experience (years)' },
      { key: 'rating', label: 'Rating' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['name', 'title', 'specialization']
  },
  news: {
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'category', label: 'Category' },
      { key: 'author', label: 'Author' },
      { 
        key: 'isPublished', 
        label: 'Published',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-published' : 'admin-badge-draft'}`}>
            {value ? 'Published' : 'Draft'}
          </span>
        )
      },
      { 
        key: 'publishedAt', 
        label: 'Published Date',
        render: (value: string) => value ? new Date(value).toLocaleDateString() : 'Not published'
      }
    ],
    searchFields: ['title', 'content', 'author', 'category']
  },
  applications: {
    columns: [
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone' },
      { 
        key: 'status', 
        label: 'Status',
        render: (value: string) => (
          <span className={`admin-badge ${
            value === 'approved' ? 'admin-badge-active' : 
            value === 'rejected' ? 'admin-badge-inactive' : 
            'admin-badge-pending'
          }`}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        )
      },
      { 
        key: 'createdAt', 
        label: 'Applied',
        render: (value: string) => new Date(value).toLocaleDateString()
      }
    ],
    searchFields: ['firstName', 'lastName', 'email', 'phone']
  },
  appointments: {
    columns: [
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone' },
      { 
        key: 'date', 
        label: 'Date',
        render: (value: string) => new Date(value).toLocaleDateString()
      },
      { key: 'time', label: 'Time' },
      { 
        key: 'status', 
        label: 'Status',
        render: (value: string) => (
          <span className={`admin-badge ${
            value === 'completed' ? 'admin-badge-active' : 
            value === 'cancelled' ? 'admin-badge-inactive' : 
            'admin-badge-pending'
          }`}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        )
      }
    ],
    searchFields: ['firstName', 'lastName', 'email', 'phone']
  },
  contact_messages: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'subject', label: 'Subject' },
      { 
        key: 'status', 
        label: 'Status',
        render: (value: string) => (
          <span className={`admin-badge ${
            value === 'replied' ? 'admin-badge-active' : 
            value === 'read' ? 'admin-badge-pending' : 
            'admin-badge-inactive'
          }`}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        )
      },
      { 
        key: 'createdAt', 
        label: 'Received',
        render: (value: string) => new Date(value).toLocaleDateString()
      }
    ],
    searchFields: ['name', 'email', 'subject', 'message']
  },
  contactmessages: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'subject', label: 'Subject' },
      { 
        key: 'status', 
        label: 'Status',
        render: (value: string) => (
          <span className={`admin-badge ${
            value === 'replied' ? 'admin-badge-active' : 
            value === 'read' ? 'admin-badge-pending' : 
            'admin-badge-inactive'
          }`}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        )
      },
      { 
        key: 'createdAt', 
        label: 'Received',
        render: (value: string) => new Date(value).toLocaleDateString()
      }
    ],
    searchFields: ['name', 'email', 'subject', 'message']
  },
  testimonials: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'service', label: 'Service' },
      { key: 'rating', label: 'Rating' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      },
      { 
        key: 'createdAt', 
        label: 'Created',
        render: (value: string) => new Date(value).toLocaleDateString()
      }
    ],
    searchFields: ['name', 'content', 'service']
  },
  publications: {
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'type', label: 'Type' },
      { key: 'year', label: 'Year' },
      { key: 'journal', label: 'Journal' },
      { 
        key: 'isPublished', 
        label: 'Published',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'journal', 'authors']
  },
  research_studies: {
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'status', label: 'Status' },
      { key: 'participants', label: 'Participants' },
      { key: 'centers', label: 'Centers' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'status']
  },
  collaborations: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'website', label: 'Website' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['name', 'description', 'website']
  },
  achievements: {
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'icon', label: 'Icon' },
      { key: 'color', label: 'Color' },
      { key: 'order', label: 'Order' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description']
  },
  history_events: {
    columns: [
      { key: 'year', label: 'Year' },
      { key: 'title', label: 'Title' },
      { key: 'icon', label: 'Icon' },
      { key: 'color', label: 'Color' },
      { key: 'order', label: 'Order' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'year']
  },
  founder_info: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'title', label: 'Title' },
      { 
        key: 'birthDate', 
        label: 'Birth Date',
        render: (value: string) => value ? new Date(value).toLocaleDateString() : 'N/A'
      },
      { 
        key: 'deathDate', 
        label: 'Death Date',
        render: (value: string) => value ? new Date(value).toLocaleDateString() : 'N/A'
      }
    ],
    searchFields: ['name', 'title']
  },
  college_history_events: {
    columns: [
      { key: 'year', label: 'Year' },
      { key: 'title', label: 'Title' },
      { key: 'eventType', label: 'Event Type' },
      { key: 'order', label: 'Order' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'eventType']
  },
  academic_programs_history: {
    columns: [
      { key: 'facultyName', label: 'Faculty' },
      { key: 'departmentName', label: 'Department' },
      { key: 'programName', label: 'Program' },
      { key: 'degreeType', label: 'Degree Type' },
      { key: 'establishedYear', label: 'Established' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['facultyName', 'departmentName', 'programName']
  },
  facility_history: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'type', label: 'Type' },
      { key: 'establishedYear', label: 'Established' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['name', 'description', 'type']
  },
  legacy_achievements: {
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'category', label: 'Category' },
      { key: 'year', label: 'Year' },
      { 
        key: 'isFeatured', 
        label: 'Featured',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'category']
  },
  historical_documents: {
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'documentType', label: 'Type' },
      { key: 'year', label: 'Year' },
      { key: 'source', label: 'Source' },
      { 
        key: 'isFeatured', 
        label: 'Featured',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'documentType']
  },
  // Alternative naming conventions for backward compatibility
  researchstudies: {
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'status', label: 'Status' },
      { key: 'participants', label: 'Participants' },
      { key: 'centers', label: 'Centers' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'status']
  },
  historyevents: {
    columns: [
      { key: 'year', label: 'Year' },
      { key: 'title', label: 'Title' },
      { key: 'icon', label: 'Icon' },
      { key: 'color', label: 'Color' },
      { key: 'order', label: 'Order' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'year']
  },
  collegehistoryevents: {
    columns: [
      { key: 'year', label: 'Year' },
      { key: 'title', label: 'Title' },
      { key: 'eventType', label: 'Event Type' },
      { key: 'order', label: 'Order' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'eventType']
  },
  academicprogramshistory: {
    columns: [
      { key: 'facultyName', label: 'Faculty' },
      { key: 'departmentName', label: 'Department' },
      { key: 'programName', label: 'Program' },
      { key: 'degreeType', label: 'Degree Type' },
      { key: 'establishedYear', label: 'Established' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['facultyName', 'departmentName', 'programName']
  },
  facilityhistory: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'type', label: 'Type' },
      { key: 'establishedYear', label: 'Established' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['name', 'description', 'type']
  },
  legacyachievements: {
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'category', label: 'Category' },
      { key: 'year', label: 'Year' },
      { 
        key: 'isFeatured', 
        label: 'Featured',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'category']
  },
  historicaldocuments: {
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'documentType', label: 'Type' },
      { key: 'year', label: 'Year' },
      { key: 'source', label: 'Source' },
      { 
        key: 'isFeatured', 
        label: 'Featured',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'description', 'documentType']
  },
  founderinfo: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'title', label: 'Title' },
      { 
        key: 'birthDate', 
        label: 'Birth Date',
        render: (value: string) => value ? new Date(value).toLocaleDateString() : 'N/A'
      },
      { 
        key: 'deathDate', 
        label: 'Death Date',
        render: (value: string) => value ? new Date(value).toLocaleDateString() : 'N/A'
      }
    ],
    searchFields: ['name', 'title']
  },
  // User management models
  users: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'studentId', label: 'Student ID' },
      { key: 'program', label: 'Program' },
      { key: 'enrollmentStatus', label: 'Status' },
      { 
        key: 'createdAt', 
        label: 'Joined',
        render: (value: string) => new Date(value).toLocaleDateString()
      }
    ],
    searchFields: ['name', 'email', 'studentId', 'program']
  },
  admin_users: {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      },
      { 
        key: 'createdAt', 
        label: 'Created',
        render: (value: string) => new Date(value).toLocaleDateString()
      }
    ],
    searchFields: ['name', 'email', 'firstName', 'lastName']
  },
  // Student management models
  student_grades: {
    columns: [
      { 
        key: 'user', 
        label: 'Student',
        render: (value: any) => value ? `${value.firstName || ''} ${value.lastName || ''}`.trim() || value.name || value.email : 'N/A'
      },
      { key: 'courseName', label: 'Course' },
      { key: 'courseCode', label: 'Code' },
      { key: 'semester', label: 'Semester' },
      { key: 'academicYear', label: 'Year' },
      { key: 'grade', label: 'Grade' },
      { key: 'score', label: 'Score' },
      { 
        key: 'createdAt', 
        label: 'Uploaded',
        render: (value: string) => new Date(value).toLocaleDateString()
      }
    ],
    searchFields: ['courseName', 'courseCode', 'grade', 'user.name', 'user.email']
  },
  student_certificates: {
    columns: [
      { 
        key: 'user', 
        label: 'Student',
        render: (value: any) => value ? `${value.firstName || ''} ${value.lastName || ''}`.trim() || value.name || value.email : 'N/A'
      },
      { key: 'title', label: 'Title' },
      { key: 'certificateType', label: 'Type' },
      { 
        key: 'issueDate', 
        label: 'Issue Date',
        render: (value: string) => new Date(value).toLocaleDateString()
      },
      { 
        key: 'expiryDate', 
        label: 'Expiry Date',
        render: (value: string) => value ? new Date(value).toLocaleDateString() : 'N/A'
      },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'certificateType', 'user.name', 'user.email']
  },
  student_schedules: {
    columns: [
      { 
        key: 'user', 
        label: 'Student',
        render: (value: any) => value ? `${value.firstName || ''} ${value.lastName || ''}`.trim() || value.name || value.email : 'N/A'
      },
      { key: 'title', label: 'Title' },
      { key: 'courseCode', label: 'Course' },
      { key: 'instructor', label: 'Instructor' },
      { key: 'dayOfWeek', label: 'Day' },
      { key: 'startTime', label: 'Start' },
      { key: 'endTime', label: 'End' },
      { key: 'location', label: 'Location' },
      { key: 'scheduleType', label: 'Type' }
    ],
    searchFields: ['title', 'courseCode', 'instructor', 'location', 'user.name', 'user.email']
  },
  courses: {
    columns: [
      { key: 'title', label: 'Title' },
      { key: 'code', label: 'Code' },
      { key: 'credits', label: 'Credits' },
      { key: 'level', label: 'Level' },
      { key: 'category', label: 'Category' },
      { key: 'instructor', label: 'Instructor' },
      { key: 'semester', label: 'Semester' },
      { key: 'academicYear', label: 'Year' },
      { 
        key: 'isActive', 
        label: 'Active',
        render: (value: boolean) => (
          <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
            {value ? 'Yes' : 'No'}
          </span>
        )
      }
    ],
    searchFields: ['title', 'code', 'description', 'instructor', 'level', 'category']
  },
  course_enrollments: {
    columns: [
      {
        key: 'user',
        label: 'Student',
        render: (value: any) => value ? `${value.firstName || ''} ${value.lastName || ''}`.trim() || value.name || value.email : 'N/A'
      },
      {
        key: 'course',
        label: 'Course',
        render: (value: any) => value ? `${value.title} (${value.code})` : 'N/A'
      },
      { key: 'status', label: 'Status' },
      { key: 'finalGrade', label: 'Final Grade' },
      { key: 'enrolledAt', label: 'Enrolled', render: (value: string) => new Date(value).toLocaleDateString() },
      { key: 'completedAt', label: 'Completed', render: (value: string) => value ? new Date(value).toLocaleDateString() : 'N/A' }
    ],
    searchFields: ['user.name', 'user.email', 'course.title', 'course.code', 'status']
  }
}

export default function ModelPage() {
  const params = useParams()
  const modelName = params.model as string
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (modelName) {
      fetchData()
    }
  }, [modelName])

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/admin/${modelName}`)
      if (response.ok) {
        const result = await response.json()
        setData(result)
      }
    } catch (error) {
      console.error(`Failed to fetch ${modelName}:`, error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm(`Are you sure you want to delete this ${modelName.slice(0, -1)}?`)) {
      try {
        const response = await fetch(`/api/admin/${modelName}/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          setData(data.filter(item => item.id !== id))
        } else {
          alert(`Failed to delete ${modelName.slice(0, -1)}`)
        }
      } catch (error) {
        console.error('Delete error:', error)
        alert(`Failed to delete ${modelName.slice(0, -1)}`)
      }
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading {modelName}...</p>
        </div>
      </div>
    )
  }

  const config = modelConfigs[modelName]
  if (!config) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Model Not Configured</h2>
        <p className="text-gray-600">The {modelName} model needs to be configured in the admin dashboard.</p>
      </div>
    )
  }

  return (
    <DataTable
      data={data}
      columns={config.columns}
      modelName={modelName.charAt(0).toUpperCase() + modelName.slice(1)}
      onDelete={handleDelete}
      searchFields={config.searchFields}
    />
  )
}
