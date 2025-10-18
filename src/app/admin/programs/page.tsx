'use client'

import { useEffect, useState } from 'react'
import DataTable from '@/components/admin/data-table'
import { Button } from '@/components/ui/button'

interface Program {
  id: string
  title: string
  description: string
  duration: string
  type: string
  level: string
  capacity: number
  isAccredited: boolean
  features: string[]
  slug: string
  createdAt: string
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPrograms()
  }, [])

  const fetchPrograms = async () => {
    try {
      const response = await fetch('/api/admin/programs')
      if (response.ok) {
        const data = await response.json()
        setPrograms(data)
      }
    } catch (error) {
      console.error('Failed to fetch programs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this program?')) {
      try {
        const response = await fetch(`/api/admin/programs/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          setPrograms(programs.filter(p => p.id !== id))
        } else {
          alert('Failed to delete program')
        }
      } catch (error) {
        console.error('Delete error:', error)
        alert('Failed to delete program')
      }
    }
  }

  const columns = [
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
    },
    { 
      key: 'createdAt', 
      label: 'Created',
      render: (value: string) => new Date(value).toLocaleDateString()
    }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading programs...</p>
        </div>
      </div>
    )
  }

  return (
    <DataTable
      data={programs}
      columns={columns}
      modelName="Programs"
      onDelete={handleDelete}
      searchFields={['title', 'description', 'type', 'level']}
    />
  )
}
