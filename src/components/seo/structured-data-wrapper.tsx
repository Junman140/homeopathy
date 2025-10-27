interface StructuredDataWrapperProps {
  data: object | object[]
  children: React.ReactNode
}

export function StructuredDataWrapper({ data, children }: StructuredDataWrapperProps) {
  const jsonLd = Array.isArray(data) ? data : [data]
  
  return (
    <>
      {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      {children}
    </>
  )
}
