"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"
import { historicalDocumentsData } from "@/lib/history-data"
import Image from "next/image"

export function HistoricalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const documents = historicalDocumentsData.filter(d => d.isFeatured)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % documents.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + documents.length) % documents.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds

      return () => clearInterval(interval)
    }
  }, [currentIndex, isPaused])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Carousel */}
      <div 
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {documents.map((document) => (
            <div key={document.id} className="min-w-full">
              <Card className="clean-card overflow-hidden">
                <div className="h-64 sm:h-80 md:h-96 bg-gray-200 dark:bg-gray-700 flex flex-col items-center justify-center relative">
                  {document.fileUrl ? (
                    <Image
                      src={document.fileUrl}
                      alt={document.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  ) : (
                    <>
                      <ImageIcon className="h-16 w-16 sm:h-20 sm:w-20 text-gray-400 mb-3" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">Image Placeholder</span>
                    </>
                  )}
                </div>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-dim-blue-800 dark:text-gray-100 mb-3">
                    {document.title}
                  </h3>
                  <p className="text-sm sm:text-base text-dim-blue-600 dark:text-gray-400 mb-4">
                    {document.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-500 capitalize">{document.documentType}</span>
                    {document.year && (
                      <span className="text-sm sm:text-base font-medium text-ucsf-blue dark:text-blue-400">
                        {document.year}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-lg"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 rounded-full shadow-lg"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2 items-center">
        {documents.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-ucsf-blue dark:bg-blue-400 w-6 sm:w-8"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        
        {/* Auto-play indicator */}
        <div className="ml-4 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
          {!isPaused ? (
            <>
              <span className="inline-block w-2 h-2 bg-medical-green rounded-full animate-pulse"></span>
              <span className="hidden sm:inline">Auto-playing</span>
            </>
          ) : (
            <span className="hidden sm:inline">Paused</span>
          )}
        </div>
      </div>
    </div>
  )
}

