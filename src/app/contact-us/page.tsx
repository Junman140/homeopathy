import MainLayout from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calendar,
  ArrowRight
} from "lucide-react"

export const metadata = {
  title: "Contact Us | Medical & Homeopathy School Nigeria",
  description: "Get in touch with Nigeria's premier medical and homeopathy school. Find our location, contact information, and schedule a campus tour or consultation.",
}

export default function ContactUsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-medical-blue via-blue-800 to-healing-green text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Get in touch with Nigeria's premier medical and homeopathy school. We're here to help you start your journey in alternative medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
                <p className="text-gray-600 mb-4">
                  Call us for admissions inquiries, clinic appointments, or general information.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-medical-blue">+234-xxx-xxx-xxxx</p>
                  <p className="text-sm text-gray-500">Monday - Friday: 8:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-healing-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll respond within 24 hours.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-healing-green">info@medicalhomeopathyschool.edu.ng</p>
                  <p className="text-sm text-gray-500">General Inquiries</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-calming-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  Come visit our beautiful campus and see our facilities firsthand.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-calming-teal">123 Medical Drive</p>
                  <p className="text-sm text-gray-500">Lagos State, Nigeria 100001</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                    placeholder="+234-xxx-xxx-xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="clinic">Clinic Appointment</option>
                    <option value="programs">Program Information</option>
                    <option value="campus-tour">Campus Tour</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-medical-blue hover:bg-blue-800">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Actions & Info */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" size="lg">
                      <Calendar className="mr-3 h-5 w-5" />
                      Schedule Campus Tour
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="lg">
                      <MessageSquare className="mr-3 h-5 w-5" />
                      Book Clinic Consultation
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="lg">
                      <Send className="mr-3 h-5 w-5" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold">9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Emergency Clinic:</strong> Available 24/7 for urgent medical consultations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Campus Location */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Campus Location</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                      <div>
                        <p className="font-medium">123 Medical Drive</p>
                        <p className="text-gray-600">Lagos State, Nigeria</p>
                        <p className="text-gray-600">100001</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <p className="text-gray-600">+234-xxx-xxx-xxxx</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <p className="text-gray-600">info@medicalhomeopathyschool.edu.ng</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      <MapPin className="mr-2 h-5 w-5" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our programs, admissions, and clinic services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What are the admission requirements for your programs?
                </h3>
                <p className="text-gray-600">
                  For our medical degree program, you need a secondary school certificate with credits in Biology, Chemistry, Physics, Mathematics, and English. For diploma programs, a secondary school certificate is sufficient. We also conduct entrance examinations and interviews.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are your programs accredited by the Nigerian government?
                </h3>
                <p className="text-gray-600">
                  Yes, our medical degree program is accredited by the National Universities Commission (NUC). Our diploma programs are recognized by relevant professional bodies in Nigeria.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I practice medicine after graduating from your school?
                </h3>
                <p className="text-gray-600">
                  Graduates of our medical degree program can practice as licensed medical doctors specializing in alternative and integrative medicine. Our graduates work in hospitals, clinics, and private practice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer financial aid or scholarships?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer various scholarship programs and financial aid options for qualified students. Contact our admissions office for detailed information about available funding opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I book an appointment at your clinic even if I'm not a student?
                </h3>
                <p className="text-gray-600">
                  Absolutely! Our clinic is open to the public and provides alternative medicine services to anyone seeking natural healing approaches. Students receive discounted rates for consultations.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <Button size="lg" className="bg-medical-blue hover:bg-blue-800">
              <MessageSquare className="mr-2 h-5 w-5" />
              Ask a Question
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
