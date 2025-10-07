import MainLayout from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Calendar, 
  User, 
  Tag,
  ArrowRight,
  ExternalLink,
  Search,
  Filter,
  BookOpen,
  Image as ImageIcon
} from "lucide-react"
import Link from "next/link"
import { historicalDocumentsData } from "@/lib/history-data"
import Image from "next/image"

export const metadata = {
  title: "News & Media | Medical & Homeopathy School Nigeria",
  description: "Stay updated with the latest news, research findings, and institutional updates from Nigeria's premier alternative medicine school.",
}

export default function NewsMediaPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-orange to-orange-800"></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                News & Media
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
                Stay informed with the latest developments in alternative medicine education and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Story
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="clean-card overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-80 lg:h-auto bg-gradient-to-br from-ucsf-blue to-blue-600 flex items-center justify-center">
                  <BookOpen className="h-24 w-24 text-white" />
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>September 19, 2024</span>
                    <span className="mx-2">•</span>
                    <Tag className="h-4 w-4 mr-1" />
                    <span>Education</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    How Traditional Medicine Enhances Modern Healthcare Education
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    A comprehensive look at how our institution is bridging the gap between traditional healing wisdom and contemporary medical training, preparing students for a more holistic approach to patient care.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      <span>Dr. Sarah Adebayo, President</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest News
              </h2>
              <p className="text-xl text-gray-600">
                Recent updates from our institution and the field of alternative medicine.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 flex gap-4">
              <Button variant="outline" size="sm">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="clean-card hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-medical-green to-green-600 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>August 15, 2024</span>
                  <span className="mx-2">•</span>
                  <Tag className="h-4 w-4 mr-1" />
                  <span>Research</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  New Study: Homeopathic Remedies Show Promise in Chronic Disease Management
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Latest research findings on the efficacy of homeopathic treatments in long-term care and chronic disease management...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span>Research Team</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="clean-card hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent-orange to-orange-600 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July 28, 2024</span>
                  <span className="mx-2">•</span>
                  <Tag className="h-4 w-4 mr-1" />
                  <span>Institution</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Celebrating 15 Years of Excellence in Alternative Medicine Education
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Reflecting on our journey and impact in Nigeria's alternative medicine landscape over the past 15 years...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span>Administration</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="clean-card hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-ucsf-blue to-blue-600 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>July 10, 2024</span>
                  <span className="mx-2">•</span>
                  <Tag className="h-4 w-4 mr-1" />
                  <span>Research</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  International Collaboration Advances Herbal Medicine Research
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  New partnership with international institutions brings cutting-edge research methodologies to traditional medicine...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span>Research Team</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="clean-card hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-medical-green to-green-600 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>June 25, 2024</span>
                  <span className="mx-2">•</span>
                  <Tag className="h-4 w-4 mr-1" />
                  <span>Student Life</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Student Research Symposium Showcases Innovative Projects
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Annual research symposium highlights student contributions to alternative medicine knowledge and practice...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span>Student Affairs</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="clean-card hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent-orange to-orange-600 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>June 12, 2024</span>
                  <span className="mx-2">•</span>
                  <Tag className="h-4 w-4 mr-1" />
                  <span>Education</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  New Curriculum Integrates Digital Health Technologies
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Updated curriculum incorporates modern digital health tools and telemedicine practices into alternative medicine training...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span>Academic Affairs</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="clean-card hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-ucsf-blue to-blue-600 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>May 30, 2024</span>
                  <span className="mx-2">•</span>
                  <Tag className="h-4 w-4 mr-1" />
                  <span>Community</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Community Health Outreach Program Reaches 5,000 Patients
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our community health initiative provides free alternative medicine consultations to underserved populations...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span>Community Outreach</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore news and updates organized by topic and interest area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="clean-card text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-ucsf-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-gray-600 text-sm">Academic updates and program developments</p>
              </CardContent>
            </Card>

            <Card className="clean-card text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-medical-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Research</h3>
                <p className="text-gray-600 text-sm">Latest research findings and studies</p>
              </CardContent>
            </Card>

            <Card className="clean-card text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Student Life</h3>
                <p className="text-gray-600 text-sm">Student achievements and campus activities</p>
              </CardContent>
            </Card>

            <Card className="clean-card text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-ucsf-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-gray-600 text-sm">Outreach programs and community impact</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Historical Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dim-blue-800 dark:text-gray-100 mb-4">
              Historical Gallery
            </h2>
            <p className="text-xl text-dim-blue-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our rich history through photographs, documents, and memorable moments from over 40 years of excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicalDocumentsData.filter(d => d.isFeatured).map((document) => (
              <Card key={document.id} className="clean-card hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex flex-col items-center justify-center relative">
                  {document.fileUrl ? (
                    <Image
                      src={document.fileUrl}
                      alt={document.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <>
                      <ImageIcon className="h-12 w-12 text-gray-400 mb-2" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">Image Placeholder</span>
                    </>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-dim-blue-800 dark:text-gray-100 mb-2">{document.title}</h3>
                  <p className="text-sm text-dim-blue-600 dark:text-gray-400 mb-3">{document.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 capitalize">{document.documentType}</span>
                    {document.year && <span className="text-xs font-medium text-ucsf-blue dark:text-blue-400">{document.year}</span>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              * Historical images and documents will be added as they become available
            </p>
            <Link href="/history">
              <Button variant="outline" size="lg">
                View Full History
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dim-blue-800 dark:text-gray-100 mb-4">
              Media Inquiries
            </h2>
            <p className="text-xl text-dim-blue-600 dark:text-gray-300 max-w-3xl mx-auto">
              For media inquiries, press releases, and interview requests, please contact our communications team.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="clean-card">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dim-blue-800 dark:text-gray-100 mb-4">Media Contact</h3>
                  <p className="text-dim-blue-600 dark:text-gray-300 mb-6">
                    Our communications team is available to assist with media inquiries, provide expert commentary, and arrange interviews with faculty and administration.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <strong className="text-dim-blue-800 dark:text-gray-100">Email:</strong>
                      <span className="text-dim-blue-600 dark:text-gray-300 ml-2">media@medicalhomeopathyschool.edu.ng</span>
                    </div>
                    <div>
                      <strong className="text-dim-blue-800 dark:text-gray-100">Phone:</strong>
                      <span className="text-dim-blue-600 dark:text-gray-300 ml-2">+234-xxx-xxx-xxxx</span>
                    </div>
                    <div>
                      <strong className="text-dim-blue-800 dark:text-gray-100">Response Time:</strong>
                      <span className="text-dim-blue-600 dark:text-gray-300 ml-2">Within 24 hours</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button size="lg" className="bg-accent-orange hover:bg-orange-700">
                      Contact Media Team
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
