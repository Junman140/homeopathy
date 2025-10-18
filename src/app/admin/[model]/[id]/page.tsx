'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function ViewRecordPage() {
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
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {modelName.charAt(0).toUpperCase() + modelName.slice(1, -1)} Details
        </h1>
        <div className="flex gap-2">
          <Link href={`/admin/${modelName}/${recordId}/edit`}>
            <Button>Edit</Button>
          </Link>
          <Link href={`/admin/${modelName}`}>
            <Button variant="outline">Back to List</Button>
          </Link>
        </div>
      </div>

      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(record).map(([key, value]) => {
            if (key === 'id') return null
            
            const displayKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
            
            return (
              <div key={key} className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {displayKey}
                </label>
                <div className="text-sm text-gray-900">
                  {Array.isArray(value) ? (
                    <ul className="list-disc list-inside">
                      {value.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : typeof value === 'boolean' ? (
                    <span className={`admin-badge ${value ? 'admin-badge-active' : 'admin-badge-inactive'}`}>
                      {value ? 'Yes' : 'No'}
                    </span>
                  ) : typeof value === 'object' && value !== null ? (
                    <pre className="text-xs bg-gray-100 p-2 rounded">
                      {JSON.stringify(value, null, 2)}
                    </pre>
                  ) : (
                    String(value || 'N/A')
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
