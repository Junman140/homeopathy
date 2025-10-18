import MainLayout from "@/components/layout/main-layout"
import HeroCarousel from "@/components/hero-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  GraduationCap, 
  Users, 
  Award, 
  Heart,
  Target,
  Eye,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Phone,
  BookOpen,
  Microscope,
  Stethoscope
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us | MOCHAM - Modern College of Homoeopathy/Alternative Medicine",
  description: "Learn about MOCHAM's mission, vision, and commitment to excellence in alternative medicine education. Discover our heritage, values, and the legacy of Dr. Effiong Udo Umoren, founder of Nigeria's first homeopathic institution.",
}

export default function AboutUsPage() {
  const heroImages = [
    '/aerial.jpg',
    '/abs.jpg', 
    '/tippi-mackenzie-homepage-banner-updated.jpeg'
  ]

  return (
    <MainLayout>
      {/* Hero Section with Carousel */}
      <HeroCarousel
        images={heroImages}
        title="About MOCHAM"
        subtitle="Nigeria's Premier Alternative Medicine Education Institution"
        description="Established in 1982 by Dr. Effiong Udo Umoren, we are the first and leading institution dedicated to homeopathic and alternative medicine education in Nigeria."
      />

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To provide world-class alternative medicine education and healthcare services that empower students to become compassionate, skilled practitioners while improving community health outcomes through evidence-based natural healing approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-healing-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be Nigeria's leading institution for alternative medicine education and healthcare, recognized internationally for producing exceptional practitioners who integrate traditional wisdom with modern scientific knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-calming-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Excellence in Education
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Compassionate Care
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Evidence-Based Practice
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Community Service
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Heritage & Legacy
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Founded in 1982 by Dr. Effiong Udo Umoren, the father of homeopathy in Nigeria, our institution began as the Cottage Homoeopathic Medical College and Hospital with a mission to provide comprehensive education in classical and modern homeopathy.
                </p>
                <p className="leading-relaxed">
                  Dr. Umoren was the first practitioner of homeopathic medicine in Nigeria, starting his practice in 1940. He established the first Association of Nigerian Homeopathic and Natural Therapeutics in 1965, laying the foundation for organized homeopathic practice in the country.
                </p>
                <p className="leading-relaxed">
                  Today, we continue his legacy as the Modern College of Homoeopathy/Alternative Medicine (MOCHAM), producing eminent practitioners who serve communities across Nigeria and neighboring countries.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-blue">1982</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-healing-green">40+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">1982</h4>
                      <p className="text-gray-600">Cottage Homoeopathic Medical College and Hospital established</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-healing-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">2007</h4>
                      <p className="text-gray-600">Curriculum modernization and international recognition</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-calming-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">1965</h4>
                      <p className="text-gray-600">First Nigerian Homeopathic Association founded</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-warm-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">1940</h4>
                      <p className="text-gray-600">Dr. Umoren began first homeopathic practice in Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Legacy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Founder & Legacy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Honoring the visionary who established homeopathic medicine in Nigeria and the institution that continues his legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/dre2.png" 
                    alt="Dr. Effiong Udo Umoren" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Effiong Udo Umoren</h3>
                <p className="text-medical-blue font-semibold mb-4">Founder & Father of Homeopathy in Nigeria</p>
                <p className="text-gray-600 text-sm">
                  Born 1901, first practitioner of homeopathic medicine in Nigeria (1940), established the first Nigerian Homeopathic Association in 1965, founded MOCHAM in 1982.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src="/handshake.png" 
                    alt="Dr. Sarah Adebayo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Adebayo</h3>
                <p className="text-healing-green font-semibold mb-4">Chief Medical Officer</p>
                <p className="text-gray-600 text-sm">
                  MD, Homeopathy (Germany), with 25+ years of international experience in alternative medicine practice and education.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <img 
                    src="/dr.png" 
                    alt="Dr. Fatima Ibrahim" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Fatima Ibrahim</h3>
                <p className="text-calming-teal font-semibold mb-4">Herbal Medicine Specialist</p>
                <p className="text-gray-600 text-sm">
                  MD, Herbal Medicine (India), with expertise in traditional Nigerian herbs and their therapeutic applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
      {/* Campus & Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Campus & Facilities
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Located in the quiet, secluded part of Uyo, Akwa Ibom State, our campus provides an ideal environment for learning and clinical practice.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Microscope className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Research Laboratories</h3>
                    <p className="text-gray-600">
                      Well-equipped anatomy, physiology, pathology, pharmacy, physics, and chemistry laboratories for practical training.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-healing-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Museums & Educational Resources</h3>
                    <p className="text-gray-600">
                      Museums of Anatomy, Pathology, and Pharmacology with modern charts and specimens for demonstration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-calming-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Teaching Hospital</h3>
                    <p className="text-gray-600">
                      Integrated clinic serving the community while providing hands-on clinical training for students.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-warm-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Research Center</h3>
                    <p className="text-gray-600">
                      Dedicated research facility for advancing homeopathic and alternative medicine knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Campus</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">No.1 Uwa Street, Uyo</p>
                    <p className="text-gray-600">Opposite Ministry of Education, Akwa Ibom State</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-gray-600">08037935596</p>
                    <p className="text-gray-600">07088418182</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <p className="text-gray-600">Previous appointment essential (minimum 48hrs notice)</p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact-us">
                  <Button size="lg" className="w-full bg-medical-blue hover:bg-blue-800">
                    Schedule a Campus Tour
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </MainLayout>
  )
}