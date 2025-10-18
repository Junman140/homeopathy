import MainLayout from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  BookOpen, 
  Users, 
  Microscope,
  Heart,
  ArrowRight,
  CheckCircle,
  Calendar,
  ExternalLink,
  FileText,
  Clock,
  Tag,
  TrendingUp,
  Filter,
  Search,
  User
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import HeroCarousel from "@/components/hero-carousel"

// Types for our data
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
  tags?: string[]
  readingTime?: number
  isPublished: boolean
  slug: string
  createdAt: string
}

interface ResearchStudy {
  id: string
  title: string
  description: string
  status: string
  startDate: string
  endDate?: string
  participants?: number
  centers?: number
  imageUrl?: string
  tags?: string[]
  readingTime?: number
  isActive: boolean
  slug: string
  createdAt: string
}

interface Collaboration {
  id: string
  name: string
  description: string
  logo?: string
  website?: string
  isActive: boolean
}

// Fetch data functions
async function getPublications(): Promise<Publication[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/publications`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch publications')
    return res.json()
  } catch (error) {
    console.error('Error fetching publications:', error)
    return []
  }
}

async function getResearchStudies(): Promise<ResearchStudy[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/research-studies`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch research studies')
    return res.json()
  } catch (error) {
    console.error('Error fetching research studies:', error)
    return []
  }
}

async function getCollaborations(): Promise<Collaboration[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/collaborations`, {
      cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch collaborations')
    return res.json()
  } catch (error) {
    console.error('Error fetching collaborations:', error)
    return []
  }
}

export const metadata = {
  title: "Research | Medical & Homeopathy School Nigeria",
  description: "Explore our cutting-edge research in alternative medicine. Discover publications, ongoing studies, and research collaborations advancing the field of integrative healthcare.",
}

export default async function ResearchPage() {
  const [publications, researchStudies, collaborations] = await Promise.all([
    getPublications(),
    getResearchStudies(),
    getCollaborations()
  ])

  // Combine all research content for the blog feed
  const allResearchContent = [
    ...publications.map(pub => ({ ...pub, contentType: 'publication' as const })),
    ...researchStudies.map(study => ({ ...study, contentType: 'study' as const }))
  ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'journal': return 'Journal Article'
      case 'conference': return 'Conference Paper'
      case 'study': return 'Research Study'
      default: return 'Publication'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'recruiting': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-gray-100 text-gray-800'
      case 'planning': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  // Research related images
  const researchImages = [
    '/11.png', // Research Wing
    '/4.png', // Laboratory Facilities
    '/5.png', // Library and Study Area
    '/19.png',
    '/20.png',
    '/g.png',
  ]

  return (
    <MainLayout>
      {/* Hero Section with Carousel */}
      <HeroCarousel 
        images={researchImages}
        title="Research & Publications"
        subtitle="Latest insights and research findings"
        description="Advancing alternative medicine through evidence-based research"
      />

      {/* Blog Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Research Blog
                </h2>
                <p className="text-lg text-gray-600">
                  Latest insights, publications, and research findings in alternative medicine
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-500">{allResearchContent.length} Articles</span>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search research articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="inline-flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Latest
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured Article */}
          {allResearchContent.length > 0 && (
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-8 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-blue-100">
                      {allResearchContent[0].contentType === 'publication' 
                        ? getTypeLabel(allResearchContent[0].type)
                        : 'Research Study'
                      }
                    </span>
                    <span className="text-blue-100">•</span>
                    <span className="text-blue-100">{formatDate(allResearchContent[0].createdAt)}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {allResearchContent[0].title}
                  </h2>
                  
                  <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                    {allResearchContent[0].description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      {allResearchContent[0].contentType === 'publication' && (
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-1" />
                          <span>{allResearchContent[0].journal || 'Research Publication'}</span>
                        </div>
                      )}
                      {allResearchContent[0].readingTime && (
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{allResearchContent[0].readingTime} min read</span>
                        </div>
                      )}
                    </div>
                    
                    <Link href={`/research/${allResearchContent[0].slug}`}>
                      <Button className="bg-white text-blue-600 hover:bg-gray-100">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Research Articles Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Latest Research</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">All</Button>
                <Button variant="outline" size="sm">Publications</Button>
                <Button variant="outline" size="sm">Studies</Button>
              </div>
            </div>

            <div className="grid gap-8">
              {allResearchContent.slice(1).map((item) => (
                <article key={item.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Article Image */}
                    <div className="md:w-64 flex-shrink-0">
                      {item.imageUrl ? (
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={256}
                          height={160}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                          {item.contentType === 'publication' ? (
                            <BookOpen className="h-12 w-12 text-gray-400" />
                          ) : (
                            <Microscope className="h-12 w-12 text-gray-400" />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Article Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {item.contentType === 'publication' 
                            ? getTypeLabel(item.type)
                            : 'Research Study'
                          }
                        </span>
                        {item.contentType === 'study' && (
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          </span>
                        )}
                        <span className="text-gray-500 text-sm">{formatDate(item.createdAt)}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        <Link href={`/research/${item.slug}`} className="hover:text-blue-600 transition-colors">
                          {item.title}
                        </Link>
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          {item.contentType === 'publication' && item.authors && item.authors.length > 0 && (
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span>{item.authors.slice(0, 2).join(', ')}{item.authors.length > 2 && ' et al.'}</span>
                            </div>
                          )}
                          {item.contentType === 'study' && item.participants && (
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span>{item.participants} participants</span>
                            </div>
                          )}
                          {item.readingTime && (
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{item.readingTime} min read</span>
                            </div>
                          )}
                        </div>

                        <Link href={`/research/${item.slug}`}>
                          <Button variant="outline" size="sm">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>

                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center pt-8">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Research
            </h3>
            <p className="text-gray-600 mb-6">
              Get the latest research findings and publications delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
