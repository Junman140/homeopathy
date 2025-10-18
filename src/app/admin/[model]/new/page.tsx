import ModelForm from '@/components/admin/model-form'

interface NewRecordPageProps {
  params: {
    model: string
  }
}

export default function NewRecordPage({ params }: NewRecordPageProps) {
  return (
    <div className="admin-form-container">
      <ModelForm modelName={params.model} />
    </div>
  )
}
