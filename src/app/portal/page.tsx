'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import PortalAuthModal from '@/components/portal-auth-modal'

export default function PortalLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const slides = [
    {
      title: "Welcome to Our School",
      subtitle: "Great Inventors are good student, be a good student."
    },
    {
      title: "Welcome to Student Portal",
      subtitle: "in MOCHAM, we make your dream become a reality, through our progressive framework"
    },
    {
      title: "Undergraduate Excellence",
      subtitle: "Build your medical foundation with comprehensive undergraduate education"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="portal-landing">
      <div className="portal-content">
        {/* Header */}
        <header className="portal-header">
          <div className="portal-logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="#10b981" stroke="white" strokeWidth="2"/>
              <path d="M12 20l6 6 12-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="portal-title">Student Portal</h1>
            <p className="portal-subtitle">MOCHAM</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="portal-main">
          <div className="portal-dots">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`portal-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          <div>
            <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>
              {slides[currentSlide].title}
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>
              {slides[currentSlide].subtitle}
            </p>
          </div>

          <button 
            onClick={() => setIsAuthModalOpen(true)} 
            className="portal-cta"
          >
            START NOW
          </button>
        </main>

        {/* Footer */}
        <footer className="portal-footer">
          <div className="portal-contact">
            <div>© UNDERGRADUATE PORTAL 2025 All right reserved</div>
            <div>
              <a href="mailto:Mochams1@yahoo.com">Mochams1@yahoo.com</a> | 
              <a href="tel:+234-803-793-5596"> +234-803-793-5596</a>
            </div>
            <div>
              <a href="tel:+234-803-793-5596">+234-803-793-5596</a> 
            </div>
          </div>
        </footer>
      </div>

      {/* Authentication Modal */}
      <PortalAuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  )
}
