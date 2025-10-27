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
      {/* Google Maps Embed Helper */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Place',
            name: 'MOCHAM - Modern College of Homeopathy and Alternative Medicine',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '11 Homoeopathic Crescent by 152 Aka Road, Adjacent to Ukana Offot Street',
              addressLocality: 'Uyo',
              addressRegion: 'Akwa Ibom State',
              addressCountry: 'NG'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '5.0521',
              longitude: '7.9333'
            }
          })
        }}
      />
    </>
  )
}
