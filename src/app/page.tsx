import MainLayout from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  GraduationCap, 
  Stethoscope, 
  Users, 
  Award, 
  BookOpen, 
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { academicProgramsHistoryData, historicalDocumentsData } from "@/lib/history-data"
import { HistoricalCarousel } from "@/components/historical-carousel"
import PublicationsCarousel from "@/components/publications-carousel"

// Types for our data
interface Program {
  id: string
  title: string
  description: string
  duration: string
  type: string
  level: string
  capacity: number
  isAccredited: boolean
  features: string[]
  icon: string
  slug: string
}

interface Publication {
  id: string
  title: string
  description: string
  type: string
  year: number
  journal?: string
  authors: string[]
  doi?: string
  url?: string
  imageUrl?: string
  slug: string
  isPublished: boolean
}

interface Service {
  id: string
  name: string
  description: string
  price: number
  duration?: string
  features: string[]
  icon: string
  category: string
  isActive: boolean
  slug: string
}

// Fetch data functions
async function getPrograms(): Promise<Program[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/programs`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch programs')
    return res.json()
  } catch (error) {
    console.error('Error fetching programs:', error)
    return []
  }
}

async function getPublications(): Promise<Publication[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/publications?limit=6`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch publications')
    return res.json()
  } catch (error) {
    console.error('Error fetching publications:', error)
    return []
  }
}

async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch services')
    return res.json()
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export default async function HomePage() {
  const [programs, publications, services] = await Promise.all([
    getPrograms(),
    getPublications(),
    getServices()
  ])
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/tippi-mackenzie-homepage-banner-updated.jpeg" 
            alt="Medical professional with patient - advancing healthcare through research and education"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 lg:p-12 shadow-xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-dim-blue-800 dark:text-gray-100">
                  Advancing Alternative Medicine Through Research & Education
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-dim-blue-600 dark:text-gray-300 leading-relaxed">
                  To care for the future, we must safeguard research and education in alternative medicine.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Link href="/about-us">
                  <Button size="lg" variant="medical" className="font-semibold w-full sm:w-auto">
                    Learn How
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  </Link>
                  <Link href="/research"> 
                  <Button size="lg" variant="outline" className="font-semibold w-full sm:w-auto">
                    Explore Our Research
                  </Button>
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 sm:gap-6 text-dim-blue-600 dark:text-gray-400 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                    <span>Accredited</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                    <span>43+ Years of Excellence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                    <span>Experienced Faculty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Gallery Carousel */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ucsf-blue dark:text-blue-400 mb-3 sm:mb-4">
                Our Historical Journey
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-dim-blue-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore over 40 years of pioneering homeopathic medicine education in Nigeria through our historical archives.
              </p>
            </div>
            
            <HistoricalCarousel />

            <div className="text-center mt-10 sm:mt-12">
              <Link href="/history">
                <Button size="lg" variant="outline">
                  View Complete History
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Talking About - Research Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
           <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                What We're Talking About
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 sm:mb-12">
                Explore our latest research publications and groundbreaking studies in alternative medicine.
              </p>
            </div>

            <PublicationsCarousel publications={publications} />

            <div className="text-center mt-10 sm:mt-12">
              <Link href="/research">
                <Button size="lg" variant="medical">
                  View All Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Academic Programs */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ucsf-blue dark:text-blue-400 mb-3 sm:mb-4">
                Our Heritage in Medical Education
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-dim-blue-600 dark:text-gray-300 max-w-3xl mx-auto">
                Since 1982, we've pioneered homeopathic and alternative medicine education in Nigeria with comprehensive programs across multiple faculties.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
              {/* Homoeopathic Medical Sciences Faculty */}
              <Card className="clean-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-ucsf-blue rounded-lg flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-dim-blue-800 dark:text-gray-100">
                      Homoeopathic Medical Sciences
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {academicProgramsHistoryData
                      .filter(p => p.facultyName === 'Homoeopathic Medical Sciences')
                      .map((program) => (
                        <div key={program.id} className="border-l-4 border-ucsf-blue pl-4 py-2">
                          <h4 className="font-semibold text-dim-blue-800 dark:text-gray-100 mb-1">
                            {program.programName}
                          </h4>
                          <p className="text-sm text-dim-blue-600 dark:text-gray-400 mb-1">
                            {program.degreeType}
                          </p>
                          <p className="text-xs text-dim-blue-600 dark:text-gray-400">
                            {program.description}
                          </p>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Alternative/Complementary Medicine Faculty */}
              <Card className="clean-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-medical-green rounded-lg flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-dim-blue-800 dark:text-gray-100">
                      Alternative Medicine
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {academicProgramsHistoryData
                      .filter(p => p.facultyName === 'Alternative/Complementary Medicine')
                      .map((program) => (
                        <div key={program.id} className="border-l-4 border-medical-green pl-4 py-2">
                          <h4 className="font-semibold text-dim-blue-800 dark:text-gray-100 mb-1">
                            {program.programName}
                          </h4>
                          <p className="text-xs text-dim-blue-600 dark:text-gray-400">
                            {program.description}
                          </p>
                        </div>
                      ))}
                    
                    {/* Additional Info */}
                    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p className="text-sm text-dim-blue-600 dark:text-gray-300 mb-3">
                        <strong>International Recognition:</strong>
                      </p>
                      <ul className="text-xs text-dim-blue-600 dark:text-gray-400 space-y-1">
                        <li>• All Nigeria Homoeopathic Medical Association</li>
                        <li>• Liga Medcorm Homoeopathica Internationals</li>
                        <li>• British Homoeopathic Research Group</li>
                        <li>• Foundation for Homoeopathic Education</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10 sm:mt-12">
              <Link href="/history">
                <Button size="lg" variant="outline">
                  Explore Our Complete History
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Why Choose Us - Premium Design */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Why Choose Our School?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Excellence in alternative medicine education since 1982
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Accredited Programs */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ucsf-blue/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <Card className="relative bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-ucsf-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Accredited Programs</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Our programs are recognized by the National Universities Commission and professional bodies.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Expert Faculty */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-green/20 to-green-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <Card className="relative bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-medical-green to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Expert Faculty</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Learn from experienced practitioners with international training and decades of clinical experience.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Hands-on Training */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <Card className="relative bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent-orange to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform">
                    <Stethoscope className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Hands-on Training</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Gain practical experience in our on-campus clinic with real patients and real-world scenarios.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Community Impact */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <Card className="relative bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform">
                    <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Community Impact</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Make a difference in your community by providing affordable, quality healthcare services.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Comprehensive Curriculum */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <Card className="relative bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/50 group-hover:scale-110 transition-transform">
                    <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Comprehensive Curriculum</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Well-rounded education covering both traditional and modern approaches to healthcare.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Career Support */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <Card className="relative bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 h-full">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/50 group-hover:scale-110 transition-transform">
                    <Star className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Career Support</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Strong alumni network and career placement services to help you succeed after graduation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Aerial CTA Section */}
      <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/aerial.jpg" 
            alt="Aerial view of our campus - spanning decades of medical education excellence"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            {/* Mobile: Centered smaller card */}
            <div className="lg:hidden">
              <div className="max-w-sm mx-auto">
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight text-dim-blue-800 dark:text-gray-100">
                    Spanning Decades of Excellence
                  </h2>
                  <p className="text-sm sm:text-base mb-4 sm:mb-6 text-dim-blue-600 dark:text-gray-300 leading-relaxed">
                    Over 40 years of pioneering alternative medicine education in Nigeria.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <Link href="/admissions" className="w-full">
                      <Button size="default" variant="medical" className="font-semibold w-full text-sm">
                        Apply for Admission
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/programs" className="w-full">
                      <Button size="default" variant="outline" className="font-semibold w-full text-sm">
                        Explore Programs
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Quick Links - Compact */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-semibold text-dim-blue-800 dark:text-gray-100 mb-3 uppercase tracking-wide">
                      Quick Links
                    </h3>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <Link href="/contact-us" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium">Visit Campus</span>
                      </Link>
                      
                      <Link href="/contact-us" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium">Contact Us</span>
                      </Link>
                      
                      <Link href="/clinic/appointments" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium">Book Appointment</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Right-positioned larger card */}
            <div className="hidden lg:block">
              <div className="max-w-5xl ml-auto">
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-8 xl:p-12 shadow-xl">
                  <div className="flex items-center gap-8">
                    {/* Main Content */}
                    <div className="flex-1">
                      <h2 className="text-3xl xl:text-5xl font-bold mb-6 leading-tight text-dim-blue-800 dark:text-gray-100">
                        Spanning Decades of Excellence
                      </h2>
                      <p className="text-lg xl:text-xl mb-8 text-dim-blue-600 dark:text-gray-300 leading-relaxed">
                        With more than 40 years of pioneering alternative medicine education in Nigeria, our institution has become a cornerstone of healthcare excellence, contributing greatly to the intellectual vigor and medical advancement of the nation.
                      </p>
                      
                      {/* CTA Buttons */}
                      <div className="flex gap-4">
                        <Link href="/admissions" className="w-auto">
                          <Button size="lg" variant="medical" className="font-semibold">
                            Apply for Admission
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                        <Link href="/programs" className="w-auto">
                          <Button size="lg" variant="outline" className="font-semibold">
                            Explore Programs
                          </Button>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Quick Links Sidebar */}
                    <div className="w-64 xl:w-72 flex-shrink-0">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="text-base font-semibold text-dim-blue-800 dark:text-gray-100 mb-6 uppercase tracking-wide">
                          Quick Links
                        </h3>
                        
                        <div className="space-y-4">
                          <Link href="/contact-us" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-base font-medium">Visit Our Campus</span>
                          </Link>
                          
                          <Link href="/contact-us" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-base font-medium">Contact Us</span>
                          </Link>
                          
                          <Link href="/clinic/appointments" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-base font-medium">Book Appointment</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}