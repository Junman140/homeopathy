import MainLayout from "@/components/layout/main-layout"
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
  Phone
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us | Medical & Homeopathy School Nigeria",
  description: "Learn about our mission, vision, and commitment to excellence in alternative medicine education. Discover our history, values, and the expert team behind Nigeria's premier medical and homeopathy school.",
}

export default function AboutUsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-medical-blue via-blue-800 to-healing-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Medical & Homeopathy School Nigeria
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Pioneering excellence in alternative medicine education and healthcare services since 2009.
            </p>
          </div>
        </div>
      </section>

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
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Founded in 2009 by Dr. Sarah Adebayo, a renowned homeopathic physician with over 25 years of international experience, our school began with a simple yet powerful vision: to bridge the gap between traditional healing wisdom and modern healthcare practices in Nigeria.
                </p>
                <p className="leading-relaxed">
                  What started as a small training center with 12 students has grown into Nigeria's premier institution for alternative medicine education. Today, we have graduated over 500 practitioners who are making a significant impact in healthcare across Nigeria and beyond.
                </p>
                <p className="leading-relaxed">
                  Our integrated approach combines rigorous academic training with hands-on clinical experience, ensuring our graduates are not only knowledgeable but also practical and compassionate healthcare providers.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-blue">2009</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-healing-green">500+</div>
                  <div className="text-gray-600">Graduates</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">2009</h4>
                      <p className="text-gray-600">School founded with first cohort of 12 students</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-healing-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">2012</h4>
                      <p className="text-gray-600">Received NUC accreditation for medical degree program</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-calming-teal rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">2015</h4>
                      <p className="text-gray-600">Integrated clinic opened, serving 10,000+ patients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-warm-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">2020</h4>
                      <p className="text-gray-600">First international accreditation and partnerships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our institution and shape the future of alternative medicine education in Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Adebayo</h3>
                <p className="text-medical-blue font-semibold mb-4">Founder & President</p>
                <p className="text-gray-600 text-sm">
                  MD, Homeopathy (Germany), with 25+ years of international experience in alternative medicine and healthcare education.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Prof. Michael Okonkwo</h3>
                <p className="text-healing-green font-semibold mb-4">Academic Director</p>
                <p className="text-gray-600 text-sm">
                  PhD in Naturopathy, former Dean of Medicine at University of Lagos, with expertise in integrative medicine.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Fatima Ibrahim</h3>
                <p className="text-calming-teal font-semibold mb-4">Clinic Director</p>
                <p className="text-gray-600 text-sm">
                  MD, Homeopathy (India), with 15+ years of clinical practice and patient care experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditation & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accreditation & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by national and international bodies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-medical-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">NUC Accredited</h3>
              <p className="text-gray-600 text-sm">
                Recognized by the National Universities Commission for our medical degree program.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-healing-green rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Professional Bodies</h3>
              <p className="text-gray-600 text-sm">
                Member of Nigerian Homeopathic Medical Association and other professional bodies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-calming-teal rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">International Partners</h3>
              <p className="text-gray-600 text-sm">
                Partnerships with leading international institutions in alternative medicine.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-warm-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">
                Regular quality assessments and continuous improvement programs.
              </p>
            </div>
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
                Located in the heart of Lagos, our modern campus provides an ideal environment for learning and clinical practice.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Modern Classrooms</h3>
                    <p className="text-gray-600">
                      State-of-the-art lecture halls equipped with the latest technology for interactive learning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-healing-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Integrated Clinic</h3>
                    <p className="text-gray-600">
                      Fully equipped clinic serving the community while providing hands-on training for students.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-calming-teal rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Library & Research Center</h3>
                    <p className="text-gray-600">
                      Comprehensive collection of medical texts, journals, and digital resources for research.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-warm-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Herbal Garden</h3>
                    <p className="text-gray-600">
                      Living laboratory featuring indigenous and exotic medicinal plants for practical study.
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
                    <p className="font-medium">123 Medical Drive</p>
                    <p className="text-gray-600">Lagos State, Nigeria 100001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <p className="text-gray-600">+234-xxx-xxx-xxxx</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
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

      {/* Call to Action */}
      <section className="py-20 bg-healing-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Become part of Nigeria's leading alternative medicine education institution and make a difference in healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="xl" className="bg-white text-healing-green hover:bg-gray-100 font-semibold">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-healing-green font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}