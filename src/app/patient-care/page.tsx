import MainLayout from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Heart, 
  Stethoscope, 
  Users, 
  Calendar,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Star
} from "lucide-react"
import Link from "next/link"
import HeroCarousel from "@/components/hero-carousel"

// Types for our data
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

interface Doctor {
  id: string
  name: string
  title: string
  specialization: string
  bio: string
  education: string
  experience: number
  rating: number
  reviewCount: number
  image?: string
  isActive: boolean
  slug: string
}

interface Testimonial {
  id: string
  name: string
  content: string
  rating: number
  service?: string
  isActive: boolean
}

// Fetch data functions
async function getServices(): Promise<Service[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/services`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch services')
    return res.json()
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

async function getDoctors(): Promise<Doctor[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/doctors`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch doctors')
    return res.json()
  } catch (error) {
    console.error('Error fetching doctors:', error)
    return []
  }
}

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/testimonials`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch testimonials')
    return res.json()
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export const metadata = {
  title: "Patient Care | Medical & Homeopathy School Nigeria",
  description: "Comprehensive alternative medicine services provided by our expert practitioners. Book appointments and discover our integrated approach to healthcare.",
}

export default async function PatientCarePage() {
  const [services, doctors, testimonials] = await Promise.all([
    getServices(),
    getDoctors(),
    getTestimonials()
  ])
  
  // Patient care related images
  const patientCareImages = [
    '/6.png', // Clinical Training Center
    '/8.png', // Student Common Area
    '/10.png', // Pharmacy Department
    '/2.png', // Campus Facilities
    '/4.png', // Laboratory Facilities
    '/1.png', // College Building Main Entrance
  ]
  
  return (
    <MainLayout>
      {/* Hero Section with Carousel */}
      <HeroCarousel 
        images={patientCareImages}
        title="Patient Care"
        subtitle="Comprehensive alternative medicine services"
        description="Expert practitioners in a caring, professional environment"
      />

      {/* Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive range of alternative medicine treatments tailored to your individual health needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const getIcon = (iconName: string) => {
                switch (iconName) {
                  case 'Heart': return <Heart className="h-8 w-8 text-white" />
                  case 'Stethoscope': return <Stethoscope className="h-8 w-8 text-white" />
                  case 'Users': return <Users className="h-8 w-8 text-white" />
                  default: return <Heart className="h-8 w-8 text-white" />
                }
              }
              
              const getBgColor = (category: string) => {
                switch (category) {
                  case 'homeopathy': return 'bg-medical-green'
                  case 'integrative': return 'bg-ucsf-blue'
                  case 'herbal': return 'bg-accent-orange'
                  default: return 'bg-medical-green'
                }
              }
              
              const getTextColor = (category: string) => {
                switch (category) {
                  case 'homeopathy': return 'text-medical-green'
                  case 'integrative': return 'text-ucsf-blue'
                  case 'herbal': return 'text-accent-orange'
                  default: return 'text-medical-green'
                }
              }
              
              return (
                <Card key={service.id} className="clean-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${getBgColor(service.category)} rounded-lg flex items-center justify-center mb-6`}>
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-right">
                      <span className={`text-lg font-semibold ${getTextColor(service.category)}`}>
                        From ₦{service.price.toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Doctors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Practitioners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our experienced doctors and practitioners who provide compassionate, evidence-based care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => {
              const getTitleColor = (specialization: string) => {
                switch (specialization.toLowerCase()) {
                  case 'homeopathic medicine': return 'text-medical-green'
                  case 'naturopathy': return 'text-ucsf-blue'
                  case 'herbal medicine': return 'text-accent-orange'
                  default: return 'text-medical-green'
                }
              }
              
              return (
                <Card key={doctor.id} className="clean-card text-center">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                    <p className={`${getTitleColor(doctor.specialization)} font-semibold mb-4`}>{doctor.title}</p>
                    <p className="text-gray-600 text-sm mb-4">
                      {doctor.bio}
                    </p>
                    <div className="flex justify-center items-center mb-4">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-gray-500">({doctor.rating}/5)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Book Your Appointment
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Schedule a consultation with our expert practitioners and take the first step towards better health.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Easy Online Booking</h3>
                    <p className="text-gray-600">
                      Book your appointment online 24/7. Choose your preferred date, time, and practitioner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ucsf-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      We offer appointments Monday through Saturday with extended hours for your convenience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
                    <p className="text-gray-600">
                      Prefer to speak with someone? Call us at +234-803-793-5596 for personalized assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="clean-card shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium">Saturday</span>
                      <span className="text-gray-600">9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="font-medium">Sunday</span>
                      <span className="text-gray-600">Emergency Only</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-medical-green/10 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Emergency Contact</h4>
                    <p className="text-sm text-gray-600">
                      For urgent medical concerns outside office hours, call our emergency line at +234-803-793-5596.
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>11 Homoeopathic Crescent by 152 Aka Road, Adjacent to Ukana Offot Street,<br />
                      Uyo, Akwa Ibom State, Nigeria.<br /></span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Patient Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our patients about their experiences with our alternative medicine treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => {
              const getInitials = (name: string) => {
                return name.split(' ').map(n => n[0]).join('').toUpperCase()
              }
              
              return (
                <Card key={testimonial.id} className="clean-card">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-600 font-semibold">{getInitials(testimonial.name)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.service || 'Patient'}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

    </MainLayout>
  )
}
