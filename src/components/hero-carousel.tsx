'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroCarouselProps {
  images: string[]
  title: string
  subtitle: string
  description?: string
}

export default function HeroCarousel({ images, title, subtitle, description }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  if (images.length === 0) {
    return (
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ucsf-blue to-blue-800"></div>
        <div className="relative h-full flex items-center z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                {title}
              </h1>
              <p className="text-lg md:text-2xl text-blue-100 leading-relaxed drop-shadow-md mb-6">
                {subtitle}
              </p>
              {description && (
                <p className="text-md md:text-lg text-white/90 drop-shadow-md">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 1 : 0,
            }}
          >
            <Image
              src={image}
              alt={`${title} - Image ${index + 1}`}
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

      {/* Hero Content */}
      <div className="relative h-full flex items-center z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 leading-relaxed drop-shadow-md mb-6">
              {subtitle}
            </p>
            {description && (
              <p className="text-md md:text-lg text-white/90 drop-shadow-md">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

