'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Publication {
  id: string
  title: string
  description: string
  type: string
  year: number
  journal?: string
  authors: string[]
  slug: string
  imageUrl?: string
}

interface PublicationsCarouselProps {
  publications: Publication[]
}

export default function PublicationsCarousel({ publications }: PublicationsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    if (publications.length <= 3) return
    setCurrentIndex((prev) => (prev + 1) % publications.length)
  }

  const prevSlide = () => {
    if (publications.length <= 3) return
    setCurrentIndex((prev) => (prev - 1 + publications.length) % publications.length)
  }

  useEffect(() => {
    if (!isPaused && publications.length > 3) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [currentIndex, isPaused, publications.length])

  const getVisiblePublications = () => {
    if (publications.length <= 3) {
      return publications
    }
    
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % publications.length
      visible.push(publications[index])
    }
    return visible
  }

  const visiblePubs = getVisiblePublications()

  if (publications.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        No publications available
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div 
        className="overflow-visible"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visiblePubs.map((publication) => (
            <Link key={publication.id} href={`/research/${publication.slug}`}>
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group h-full">
                <div className="w-full h-48 bg-gray-700 relative overflow-hidden">
                  {publication.imageUrl ? (
                    <Image
                      src={publication.imageUrl}
                      alt={publication.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <FileText className="h-16 w-16 text-gray-500" />
                    </div>
                  )}
                  {/* Type Badge */}
                  <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                  </div>
                </div>
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs text-gray-400">
                      {publication.year}
                      {publication.journal && ` • ${publication.journal.substring(0, 20)}${publication.journal.length > 20 ? '...' : ''}`}
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {publication.title}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                    {publication.description}
                  </p>
                  {publication.authors && publication.authors.length > 0 && (
                    <div className="text-xs text-gray-500 italic">
                      By: {publication.authors.slice(0, 2).join(', ')}
                      {publication.authors.length > 2 && ' et al.'}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {publications.length > 3 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {publications.length > 3 && (
        <div className="flex justify-center mt-6 gap-2 items-center">
          {publications.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-blue-400 w-6 sm:w-8"
                  : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          <div className="ml-3 text-xs text-gray-500">
            {!isPaused && publications.length > 3 && (
              <>
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></span>
                <span className="hidden sm:inline">Auto</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

