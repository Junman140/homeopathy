'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HistoricalDocument {
  id: string
  fileUrl?: string | null
  title: string
}

interface HistoryHeroCarouselProps {
  documents: HistoricalDocument[]
}

export default function HistoryHeroCarousel({ documents }: HistoryHeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const displayDocs = documents.filter(d => d.fileUrl).slice(0, 6)

  useEffect(() => {
    if (displayDocs.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayDocs.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [displayDocs.length])

  if (displayDocs.length === 0) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-ucsf-blue to-blue-800"></div>
    )
  }

  return (
    <div className="absolute inset-0">
      {displayDocs.map((doc, index) => (
        <div
          key={doc.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
          }}
        >
          <Image
            src={doc.fileUrl!}
            alt={doc.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
    </div>
  )
}

