import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-ucsf-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Medical & Homeopathy School</h3>
                <p className="text-sm text-gray-400">Nigeria</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading medical and homeopathy school in Nigeria offering comprehensive 
              alternative medicine education with integrated clinic services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Academic Programs</Link></li>
              <li><Link href="/admissions" className="text-gray-300 hover:text-white">Admissions</Link></li>
              <li><Link href="/clinic/services" className="text-gray-300 hover:text-white">Clinic Services</Link></li>
              <li><Link href="/research" className="text-gray-300 hover:text-white">Research</Link></li>
              <li><Link href="/news-blog" className="text-gray-300 hover:text-white">News & Blog</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/programs/medical-degree" className="text-gray-300 hover:text-white">Medical Degree</Link></li>
              <li><Link href="/programs/homeopathy-diploma" className="text-gray-300 hover:text-white">Homeopathy Diploma</Link></li>
              <li><Link href="/programs/naturopathy-certificate" className="text-gray-300 hover:text-white">Naturopathy Certificate</Link></li>
              <li><Link href="/programs/continuing-education" className="text-gray-300 hover:text-white">Continuing Education</Link></li>
              <li><Link href="/student-life" className="text-gray-300 hover:text-white">Student Life</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-white">Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">
                    123 Medical Drive<br />
                    Lagos State, Nigeria<br />
                    100001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <p className="text-gray-300">+234-xxx-xxx-xxxx</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <p className="text-gray-300">info@medicalhomeopathyschool.edu.ng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Medical & Homeopathy School Nigeria. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-400 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
