import React from 'react'

interface GoogleMapsEmbedProps {
  width?: string
  height?: string
  className?: string
}

export function GoogleMapsEmbed({ 
  width = '100%', 
  height = '400px',
  className = ''
}: GoogleMapsEmbedProps) {
  // Google Maps embed URL for the address
  // You can get the exact embed URL by searching the address on Google Maps and clicking "Share" > "Embed a map"
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8487379845896!2d7.9333!3d5.0521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDMnMDcuNiJOIDfCsDU1JzU5LjkiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng'
  
  return (
    <div className={className}>
      <iframe
        width={width}
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapEmbedUrl}
        title="MOCHAM Location - Uyo, Akwa Ibom State"
        aria-label="Map showing MOCHAM location at 11 Homoeopathic Crescent, Uyo"
      ></iframe>
    </div>
  )
}

// Component with direction link
export function GoogleMapsDirections({ className = '' }: { className?: string }) {
  const address = '11+Homoeopathic+Crescent+by+152+Aka+Road,+Adjacent+to+Ukana+Offot+Street,+Uyo,+Akwa+Ibom+State,+Nigeria'
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
  
  return (
    <a
      href={directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline ${className}`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
      Get Directions on Google Maps
    </a>
  )
}
