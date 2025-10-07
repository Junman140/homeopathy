import MainLayout from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Calendar, 
  Award, 
  Users, 
  Heart,
  ArrowRight,
  CheckCircle,
  MapPin,
  GraduationCap,
  BookOpen,
  Microscope,
  Building,
  User,
  Globe,
  FileText,
  Image as ImageIcon
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Types for our data
interface HistoryEvent {
  id: string
  year: number
  title: string
  description: string
  icon: string
  color: string
  stats: string[]
  isActive: boolean
  order: number
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  color: string
  isActive: boolean
  order: number
}

interface FounderInfo {
  id: string
  name: string
  birthDate: string
  deathDate: string
  title: string
  biography: any
}

interface CollegeHistoryEvent {
  id: string
  year: number
  title: string
  description: string
  eventType: string
  details: any
  imageUrl?: string
  isActive: boolean
  order: number
}

interface AcademicProgramHistory {
  id: string
  facultyName: string
  departmentName?: string
  programName: string
  degreeType?: string
  establishedYear?: number
  description?: string
  isActive: boolean
}

interface FacilityHistory {
  id: string
  name: string
  type: string
  description?: string
  establishedYear?: number
  equipment: string[]
  isActive: boolean
}

interface LegacyAchievement {
  id: string
  title: string
  description?: string
  category: string
  year?: number
  details?: any
  isFeatured: boolean
}

interface HistoricalDocument {
  id: string
  title: string
  documentType: string
  fileUrl?: string
  description?: string
  year?: number
  source?: string
  isFeatured: boolean
}

// Fetch data functions
async function getHistoryEvents(): Promise<HistoryEvent[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/history`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch history events')
    return res.json()
  } catch (error) {
    console.error('Error fetching history events:', error)
    return []
  }
}

async function getAchievements(): Promise<Achievement[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/achievements`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch achievements')
    return res.json()
  } catch (error) {
    console.error('Error fetching achievements:', error)
    return []
  }
}

async function getFounderInfo(): Promise<FounderInfo[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL }/api/founder-info`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch founder info')
    return res.json()
  } catch (error) {
    console.error('Error fetching founder info:', error)
    return []
  }
}

async function getCollegeHistoryEvents(): Promise<CollegeHistoryEvent[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/college-history-events`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch college history events')
    return res.json()
  } catch (error) {
    console.error('Error fetching college history events:', error)
    return []
  }
}

async function getAcademicProgramsHistory(): Promise<AcademicProgramHistory[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/academic-programs-history`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch academic programs history')
    return res.json()
  } catch (error) {
    console.error('Error fetching academic programs history:', error)
    return []
  }
}

async function getFacilitiesHistory(): Promise<FacilityHistory[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/facilities-history`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch facilities history')
    return res.json()
  } catch (error) {
    console.error('Error fetching facilities history:', error)
    return []
  }
}

async function getLegacyAchievements(): Promise<LegacyAchievement[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/legacy-achievements`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch legacy achievements')
    return res.json()
  } catch (error) {
    console.error('Error fetching legacy achievements:', error)
    return []
  }
}

async function getHistoricalDocuments(): Promise<HistoricalDocument[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/historical-documents`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch historical documents')
    return res.json()
  } catch (error) {
    console.error('Error fetching historical documents:', error)
    return []
  }
}

export const metadata = {
  title: "Our History | Medical & Homeopathy School Nigeria",
  description: "Discover our journey from a small training center to Nigeria's premier alternative medicine institution. Learn about our milestones, achievements, and impact over 15 years of excellence.",
}

export default async function HistoryPage() {
  const [
    historyEvents, 
    achievements, 
    founderInfo, 
    collegeHistoryEvents, 
    academicProgramsHistory, 
    facilitiesHistory, 
    legacyAchievements, 
    historicalDocuments
  ] = await Promise.all([
    getHistoryEvents(),
    getAchievements(),
    getFounderInfo(),
    getCollegeHistoryEvents(),
    getAcademicProgramsHistory(),
    getFacilitiesHistory(),
    getLegacyAchievements(),
    getHistoricalDocuments()
  ])

  const founder = founderInfo.length > 0 ? founderInfo[0] : null

  return (
    <MainLayout>
      {/* Hero Section - 50% smaller */}
      <section className="relative h-[250px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ucsf-blue to-blue-800"></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                Our History
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Nigeria's first and foremost homeopathic medicine institution - A legacy of excellence spanning over 40 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Timeline Section - 50% smaller */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dim-blue-800 dark:text-gray-100 mb-3">
              Our Journey Through the Years
            </h2>
            <p className="text-lg text-dim-blue-600 dark:text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to becoming Nigeria's leading alternative medicine institution.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {historyEvents.slice(0, 4).map((event, index) => {
                const getBgColor = (color: string) => {
                  switch (color) {
                    case 'ucsf-blue': return 'bg-ucsf-blue'
                    case 'medical-green': return 'bg-medical-green'
                    case 'accent-orange': return 'bg-accent-orange'
                    default: return 'bg-ucsf-blue'
                  }
                }
                
                return (
                  <div key={event.id} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${getBgColor(event.color)} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {event.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-dim-blue-800 dark:text-gray-100">{event.title}</h3>
                      <p className="text-sm text-dim-blue-600 dark:text-gray-400">{event.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Wikipedia-Style Comprehensive History */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Table of Contents */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dim-blue-800 dark:text-gray-100 mb-4">Table of Contents</h3>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  <Link href="#founder" className="text-dim-blue-600 dark:text-gray-300 hover:text-ucsf-blue">1. The Founder</Link>
                  <Link href="#foundation" className="text-dim-blue-600 dark:text-gray-300 hover:text-ucsf-blue">2. Foundation & Early Years</Link>
                  <Link href="#programs" className="text-dim-blue-600 dark:text-gray-300 hover:text-ucsf-blue">3. Academic Programs</Link>
                  <Link href="#facilities" className="text-dim-blue-600 dark:text-gray-300 hover:text-ucsf-blue">4. Facilities & Infrastructure</Link>
                  <Link href="#timeline" className="text-dim-blue-600 dark:text-gray-300 hover:text-ucsf-blue">5. Historical Timeline</Link>
                  <Link href="#legacy" className="text-dim-blue-600 dark:text-gray-300 hover:text-ucsf-blue">6. Legacy & Achievements</Link>
                  <Link href="#gallery" className="text-dim-blue-600 dark:text-gray-300 hover:text-ucsf-blue">7. Historical Gallery</Link>
                </div>
              </CardContent>
            </Card>

            {/* The Founder Section */}
            <Card className="mb-8" id="founder">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="h-16 w-16 text-gray-400" />
                    <span className="text-xs text-gray-500 absolute bottom-2">Portrait Placeholder</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-dim-blue-800 dark:text-gray-100 mb-4">Dr. Effiong Udo Umoren</h2>
                    <p className="text-lg text-dim-blue-600 dark:text-gray-300 mb-4">Founder and Father of Homeopathy in Nigeria (1901-2002)</p>
                    {founder && (
                      <div className="space-y-3">
                        <p className="text-dim-blue-600 dark:text-gray-300">
                          Born on December 18, 1901, in Ikot Akpan, Ikot-Eyo in Ubium clan, Dr. E. U. Umoren was the visionary founder who established the first homeopathic medicine institution in Nigeria.
                        </p>
                        <p className="text-dim-blue-600 dark:text-gray-300">
                          With extensive international education including degrees in Naturopathy, Biochemistry, Homeopathic Medicine, and Philosophy, Dr. Umoren became the first practitioner of homeopathic medicine in Nigeria in 1940.
                        </p>
                        <p className="text-dim-blue-600 dark:text-gray-300">
                          He founded the first Association of Nigerian Homeopathic and natural therapeutics in 1965 and established the Cottage Homoeopathic Medical College and Hospital in 1982, which later became the Modern College of Homoeopathy/Alternative Medicine.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Foundation & Early Years */}
            <Card className="mb-8" id="foundation">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-dim-blue-800 dark:text-gray-100 mb-6">Foundation & Early Years</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-dim-blue-800 dark:text-gray-100 mb-4">Original Establishment</h3>
                    <p className="text-dim-blue-600 dark:text-gray-300 mb-4">
                      The college was founded in 1982 by Dr. E. U. Umoren as the "Cottage Homoeopathic Medical College and Hospital" at 60 Aka Road, Uyo, Cross River State (now Akwa Ibom State).
                    </p>
                    <p className="text-dim-blue-600 dark:text-gray-300">
                      It was dedicated to teaching classical and modern Homoeopathy as well as other alternative medicine with the expertise of qualified expatriates, imparting the medical philosophy of Dr. Samuel Christian Frederick Hahnemann.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dim-blue-800 dark:text-gray-100 mb-4">Current Location</h3>
                    <p className="text-dim-blue-600 dark:text-gray-300 mb-4">
                      The college is now situated at No.1 Uwa Street, Uyo, opposite the Ministry of Education (Examinations and Certification Division) in a quiet, secluded part of the capital city.
                    </p>
                    <p className="text-dim-blue-600 dark:text-gray-300">
                      Visitors are welcome by appointment only, with a minimum 48-hour notice required. Contact: 08037935596 or 07088418182.
            </p>
          </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Programs */}
            <Card className="mb-8" id="programs">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-dim-blue-800 dark:text-gray-100 mb-6">Academic Programs</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-dim-blue-800 dark:text-gray-100 mb-4 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-ucsf-blue" />
                      Faculty of Homoeopathic Medical Sciences
                    </h3>
                    <div className="space-y-3">
                      {academicProgramsHistory.filter(p => p.facultyName === 'Homoeopathic Medical Sciences').map((program) => (
                        <div key={program.id} className="border-l-4 border-ucsf-blue pl-4">
                          <h4 className="font-semibold text-dim-blue-800 dark:text-gray-100">{program.programName}</h4>
                          <p className="text-sm text-dim-blue-600 dark:text-gray-400">{program.degreeType}</p>
                          <p className="text-sm text-dim-blue-600 dark:text-gray-400">{program.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dim-blue-800 dark:text-gray-100 mb-4 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-medical-green" />
                      Faculty of Alternative/Complementary Medicine
                    </h3>
                    <div className="space-y-3">
                      {academicProgramsHistory.filter(p => p.facultyName === 'Alternative/Complementary Medicine').map((program) => (
                        <div key={program.id} className="border-l-4 border-medical-green pl-4">
                          <h4 className="font-semibold text-dim-blue-800 dark:text-gray-100">{program.programName}</h4>
                          <p className="text-sm text-dim-blue-600 dark:text-gray-400">{program.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Facilities & Infrastructure */}
            <Card className="mb-8" id="facilities">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-dim-blue-800 dark:text-gray-100 mb-6">Facilities & Infrastructure</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {facilitiesHistory.map((facility) => {
                    const getIcon = (type: string) => {
                      switch (type) {
                        case 'laboratory': return <Microscope className="h-6 w-6" />
                        case 'museum': return <BookOpen className="h-6 w-6" />
                        case 'research_center': return <Building className="h-6 w-6" />
                        default: return <Building className="h-6 w-6" />
                      }
                    }
                    
                    const getBgColor = (type: string) => {
                      switch (type) {
                        case 'laboratory': return 'bg-ucsf-blue'
                        case 'museum': return 'bg-medical-green'
                        case 'research_center': return 'bg-accent-orange'
                        default: return 'bg-gray-500'
                }
              }
              
              return (
                      <div key={facility.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <div className={`w-10 h-10 ${getBgColor(facility.type)} rounded-lg flex items-center justify-center mr-3`}>
                            {getIcon(facility.type)}
                          </div>
                          <h3 className="font-semibold text-dim-blue-800 dark:text-gray-100">{facility.name}</h3>
                        </div>
                        <p className="text-sm text-dim-blue-600 dark:text-gray-400 mb-2">{facility.description}</p>
                        <p className="text-xs text-gray-500">Est. {facility.establishedYear}</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Historical Timeline */}
            <Card className="mb-8" id="timeline">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-dim-blue-800 dark:text-gray-100 mb-6">Historical Timeline</h2>
                <div className="space-y-6">
                  {collegeHistoryEvents.sort((a, b) => a.order - b.order).map((event) => (
                    <div key={event.id} className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-ucsf-blue rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                        {event.year}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-dim-blue-800 dark:text-gray-100 mb-2">{event.title}</h3>
                        <p className="text-dim-blue-600 dark:text-gray-300 mb-2">{event.description}</p>
                        <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs">
                          {event.eventType}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Legacy & Achievements */}
            <Card className="mb-8" id="legacy">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-dim-blue-800 dark:text-gray-100 mb-6">Legacy & Achievements</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {legacyAchievements.filter(a => a.isFeatured).map((achievement) => (
                    <div key={achievement.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                      <div className="flex items-center mb-3">
                        <Award className="h-6 w-6 text-ucsf-blue mr-2" />
                        <h3 className="text-lg font-semibold text-dim-blue-800 dark:text-gray-100">{achievement.title}</h3>
                      </div>
                      <p className="text-dim-blue-600 dark:text-gray-300 mb-2">{achievement.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{achievement.category}</span>
                        {achievement.year && <span className="text-sm font-medium text-ucsf-blue">{achievement.year}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Historical Gallery */}
            <Card className="mb-8" id="gallery">
                  <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-dim-blue-800 dark:text-gray-100 mb-6">Historical Gallery</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {historicalDocuments.filter(d => d.isFeatured).map((document) => (
                    <div key={document.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative">
                        {document.fileUrl ? (
                          <Image
                            src={document.fileUrl}
                            alt={document.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <ImageIcon className="h-12 w-12 text-gray-400" />
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-dim-blue-800 dark:text-gray-100 mb-2">{document.title}</h3>
                        <p className="text-sm text-dim-blue-600 dark:text-gray-400 mb-2">{document.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{document.documentType}</span>
                          {document.year && <span className="text-xs font-medium text-ucsf-blue">{document.year}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">* Historical images and documents will be added here</p>
                </div>
                  </CardContent>
                </Card>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-ucsf-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Be Part of Our Continuing Story
          </h2>
          <p className="text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
            Join us in advancing alternative medicine education and making a difference in healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/education">
              <Button size="lg" className="bg-white text-ucsf-blue hover:bg-gray-100 font-semibold">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/research">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ucsf-blue font-semibold">
                View Research
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
