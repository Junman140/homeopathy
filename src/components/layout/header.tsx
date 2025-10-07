"use client"

import Link from "next/link"
import React, { useState } from "react"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/simple-navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const [isClinicOpen, setIsClinicOpen] = useState(false)

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('[data-dropdown]')) {
        setIsProgramsOpen(false)
        setIsClinicOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-xs sm:text-sm">info@medicalhomeopathyschool.edu.ng</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>AKS, Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ucsf-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                  MOCHAM
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Nigeria</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex" data-dropdown>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    onClick={() => {
                      setIsProgramsOpen(!isProgramsOpen)
                      setIsClinicOpen(false)
                    }}
                    isOpen={isProgramsOpen}
                  >
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent isOpen={isProgramsOpen}>
                    <div className="grid gap-3 p-6">
                      <Link 
                        href="/about-us" 
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsProgramsOpen(false)}
                      >
                        <div className="font-semibold text-gray-900 dark:text-gray-100">Overview</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">About our institution and mission</p>
                      </Link>
                      <Link 
                        href="/history" 
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsProgramsOpen(false)}
                      >
                        <div className="font-semibold text-gray-900 dark:text-gray-100">History</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Our journey and milestones</p>
                      </Link>
                      <Link 
                        href="/about-us#leadership" 
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsProgramsOpen(false)}
                      >
                        <div className="font-semibold text-gray-900 dark:text-gray-100">Leadership</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Meet our leadership team</p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    onClick={() => {
                      setIsClinicOpen(!isClinicOpen)
                      setIsProgramsOpen(false)
                    }}
                    isOpen={isClinicOpen}
                  >
                    Patient Care
                  </NavigationMenuTrigger>
                  <NavigationMenuContent isOpen={isClinicOpen}>
                    <div className="grid gap-3 p-6">
                      <Link 
                        href="/patient-care/services" 
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsClinicOpen(false)}
                      >
                        <div className="font-semibold text-gray-900 dark:text-gray-100">Our Services</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Alternative medicine treatments</p>
                      </Link>
                      <Link 
                        href="/patient-care/doctors" 
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsClinicOpen(false)}
                      >
                        <div className="font-semibold text-gray-900 dark:text-gray-100">Our Doctors</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Meet our expert practitioners</p>
                      </Link>
                      <Link 
                        href="/patient-care/appointments" 
                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsClinicOpen(false)}
                      >
                        <div className="font-semibold text-gray-900 dark:text-gray-100">Book Appointment</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Schedule your consultation</p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/research" className={navigationMenuTriggerStyle}>
                    Research
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/education" className={navigationMenuTriggerStyle}>
                    Education
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/news-media" className={navigationMenuTriggerStyle}>
                    News & Media
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Apply Now
              </Button>
              <Button variant="medical" size="sm">
                View Research
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/" className="block py-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                Home
              </Link>
              <div className="space-y-2">
                <div className="font-medium text-gray-900 dark:text-gray-100">About</div>
                <Link href="/about-us" className="block py-1 pl-4 text-gray-600 dark:text-gray-400">
                  Overview
                </Link>
                <Link href="/history" className="block py-1 pl-4 text-gray-600 dark:text-gray-400">
                  History
                </Link>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-gray-900 dark:text-gray-100">Patient Care</div>
                <Link href="/patient-care" className="block py-1 pl-4 text-gray-600 dark:text-gray-400">
                  Services
                </Link>
                <Link href="/patient-care/appointments" className="block py-1 pl-4 text-gray-600 dark:text-gray-400">
                  Book Appointment
                </Link>
              </div>
              <Link href="/research" className="block py-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                Research
              </Link>
              <Link href="/education" className="block py-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                Education
              </Link>
              <Link href="/news-media" className="block py-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                News & Media
              </Link>
              <div className="flex space-x-4 pt-4">
                <Button variant="outline" className="flex-1">
                  Apply Now
                </Button>
                <Button variant="medical" className="flex-1">
                  View Research
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
