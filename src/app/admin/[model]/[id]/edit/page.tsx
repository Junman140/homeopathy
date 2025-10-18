'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ModelForm from '@/components/admin/model-form'

export default function EditRecordPage() {
  const params = useParams()
  const modelName = params.model as string
  const recordId = params.id as string
  const [record, setRecord] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (modelName && recordId) {
      fetchRecord()
    }
  }, [modelName, recordId])

  const fetchRecord = async () => {
    try {
      const response = await fetch(`/api/admin/${modelName}/${recordId}`)
      if (response.ok) {
        const data = await response.json()
        setRecord(data)
      }
    } catch (error) {
      console.error('Failed to fetch record:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading record...</p>
        </div>
      </div>
    )
  }

  if (!record) {
    return (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Record Not Found</h2>
        <p className="text-gray-600">The requested record could not be found.</p>
      </div>
    )
  }

  return (
    <div className="admin-form-container">
      <ModelForm 
        modelName={modelName} 
        recordId={recordId}
        initialData={record}
      />
    </div>
  )
}
