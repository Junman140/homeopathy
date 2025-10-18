import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/mocha.png" alt="MOCHAM Logo" width={100} height={100} />
              <div>
                <h3 className="font-bold text-lg">MOCHAM</h3>
                <p className="text-sm text-gray-400">Nigeria</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading medical and homeopathy school in Nigeria offering comprehensive 
              alternative medicine education.
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
              <li><Link href="/history" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/education" className="text-gray-300 hover:text-white">Academic Programs</Link></li>
              <li><Link href="/portal" className="text-gray-300 hover:text-white">Admissions</Link></li>
              <li><Link href="/research" className="text-gray-300 hover:text-white">Research</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/education" className="text-gray-300 hover:text-white">Medical Degree</Link></li>
              <li><Link href="/education" className="text-gray-300 hover:text-white">Homeopathy Diploma</Link></li>
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
                    11 Homoeopathic Crescent by 152 Aka Road, Adjacent to Ukana Offot Street,<br />
                    Uyo, Akwa Ibom State, Nigeria<br />
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <p className="text-gray-300">+234-803-793-5596</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <p className="text-gray-300">Mochams1@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} MOCHAM School Nigeria. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
