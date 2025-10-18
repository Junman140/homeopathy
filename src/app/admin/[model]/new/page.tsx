import ModelForm from '@/components/admin/model-form'

interface NewRecordPageProps {
  params: Promise<{
    model: string
  }>
}

export default async function NewRecordPage({ params }: NewRecordPageProps) {
  const resolvedParams = await params
  return (
    <div className="admin-form-container">
      <ModelForm modelName={resolvedParams.model} />
    </div>
  )
}
