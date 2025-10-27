import MainLayout from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Calendar,
  Clock,
  MapPin
} from "lucide-react"
import Link from "next/link"
import HeroCarousel from "@/components/hero-carousel"

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

// Fetch data function
async function getPrograms(): Promise<Program[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/programs`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch programs')
    return res.json()
  } catch (error) {
    console.error('Error fetching programs:', error)
    return []
  }
}

export const metadata = {
  title: "Education Programs | Homeopathy Training Nigeria | MOCHAM Courses",
  description: "Explore MOCHAM's comprehensive alternative medicine education programs. Homeopathy diplomas, medical degrees, and specialized courses in Uyo, Nigeria. Accredited programs since 1982.",
  keywords: [
    'homeopathy diploma Nigeria',
    'alternative medicine training',
    'medical courses Uyo',
    'homeopathy education programs',
    'holistic medicine courses',
    'homoeopathic training Nigeria',
    'MOCHAM programs'
  ],
  openGraph: {
    title: 'MOCHAM Education Programs - Homeopathy & Alternative Medicine Training',
    description: 'Comprehensive homeopathy and alternative medicine education programs in Nigeria. Accredited courses, expert faculty, hands-on clinical training in Uyo.',
    url: 'https://www.mocham.org/education',
  }
}

export default async function EducationPage() {
  const programs = await getPrograms()
  
  // Education-related images
  const educationImages = [
    '/5.png', // Library and Study Area
    '/7.png', // Lecture Halls
    '/3.png', // Academic Block
    '/4.png', // Laboratory Facilities
    '/11.png', // Research Wing
    '/12.png', // Campus Grounds
  ]
  
  return (
    <MainLayout>
      {/* Hero Section with Carousel */}
      <HeroCarousel 
        images={educationImages}
        title="Education Excellence"
        subtitle="Comprehensive alternative medicine education programs"
        description="Preparing the next generation of healthcare practitioners"
      />

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Academic Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of alternative medicine programs designed to prepare you for a successful career in healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => {
              const getIcon = (iconName: string) => {
                switch (iconName) {
                  case 'GraduationCap': return <GraduationCap className="h-8 w-8 text-white" />
                  case 'Stethoscope': return <BookOpen className="h-8 w-8 text-white" />
                  case 'BookOpen': return <Users className="h-8 w-8 text-white" />
                  default: return <GraduationCap className="h-8 w-8 text-white" />
                }
              }
              
              const getBgColor = (type: string) => {
                switch (type) {
                  case 'degree': return 'bg-ucsf-blue'
                  case 'diploma': return 'bg-medical-green'
                  case 'certificate': return 'bg-accent-orange'
                  default: return 'bg-ucsf-blue'
                }
              }
              
              const getButtonVariant = (type: string) => {
                switch (type) {
                  case 'degree': return 'medical'
                  case 'diploma': return 'healing'
                  case 'certificate': return 'outline'
                  default: return 'medical'
                }
              }
              
              return (
                <Card key={program.id} className="clean-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${getBgColor(program.type)} rounded-lg flex items-center justify-center mb-6`}>
                      {getIcon(program.icon)}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {program.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{program.duration} Duration</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Award className="h-4 w-4 mr-2" />
                        <span>{program.isAccredited ? 'NUC Accredited' : 'Professional Program'}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{program.capacity} Students/Year</span>
                      </div>
                    </div>
                    <Link href={`/portal`}>
                      <Button variant={getButtonVariant(program.type) as any} className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Education */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Education?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional education and training that prepares you for a successful career in alternative medicine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-ucsf-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accredited Programs</h3>
              <p className="text-gray-600">
                Our programs are recognized by the National Universities Commission and professional bodies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from experienced practitioners with international training and decades of clinical experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hands-on Training</h3>
              <p className="text-gray-600">
                Gain practical experience in our on-campus clinic with real patients and real-world scenarios.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-ucsf-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                Well-rounded education covering both traditional and modern approaches to healthcare.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Facilities</h3>
              <p className="text-gray-600">
                State-of-the-art classrooms, laboratories, and clinical training facilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Support</h3>
              <p className="text-gray-600">
                Strong alumni network and career placement services to help you succeed after graduation.
              </p>
            </div>
          </div>
        </div>
      </section>

       

      {/* Student Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in your academic journey with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="clean-card text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-ucsf-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Library & Resources</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive collection of medical texts, journals, and digital resources.
                </p>
              </CardContent>
            </Card>

            <Card className="clean-card text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-medical-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Career Services</h3>
                <p className="text-gray-600 text-sm">
                  Career counseling, job placement assistance, and professional development.
                </p>
              </CardContent>
            </Card>

            <Card className="clean-card text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Financial Aid</h3>
                <p className="text-gray-600 text-sm">
                  Scholarships, grants, and financial assistance programs for qualified students.
                </p>
              </CardContent>
            </Card>

            <Card className="clean-card text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-ucsf-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Campus Life</h3>
                <p className="text-gray-600 text-sm">
                  Student organizations, events, and campus facilities for a complete experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-ucsf-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of successful graduates who are making a difference in healthcare through alternative medicine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portal">
              <Button size="xl" className="bg-white text-ucsf-blue hover:bg-gray-100 font-semibold">
                Student Portal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
