import MainLayout from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowLeft,
  Calendar,
  User,
  ExternalLink,
  FileText,
  Tag,
  Clock,
  Share2
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Types for our data
interface Publication {
  id: string
  title: string
  description: string
  content?: string
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
  updatedAt: string
}

interface ResearchStudy {
  id: string
  title: string
  description: string
  content?: string
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
  updatedAt: string
}

// Fetch individual publication
async function getPublication(slug: string): Promise<Publication | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/publications?slug=${slug}`, {
      cache: 'no-store'
    })
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error('Error fetching publication:', error)
    return null
  }
}

// Fetch individual research study
async function getResearchStudy(slug: string): Promise<ResearchStudy | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/research-studies?slug=${slug}`, {
      cache: 'no-store'
    })
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error('Error fetching research study:', error)
    return null
  }
}

// Fetch related articles
async function getRelatedPublications(type: string, currentId: string): Promise<Publication[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/publications?limit=3`, {
      cache: 'no-store'
    })
    if (!res.ok) return []
    const publications = await res.json()
    return publications.filter((pub: Publication) => pub.id !== currentId && pub.type === type).slice(0, 3)
  } catch (error) {
    console.error('Error fetching related publications:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const publication = await getPublication(params.slug)
  const study = await getResearchStudy(params.slug)
  
  const article = publication || study
  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested research article could not be found."
    }
  }

  return {
    title: `${article.title} | Research`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  }
}

export default async function ResearchArticlePage({ params }: { params: { slug: string } }) {
  const publication = await getPublication(params.slug)
  const study = await getResearchStudy(params.slug)
  
  const article = publication || study
  if (!article) {
    notFound()
  }

  const relatedPublications = publication ? await getRelatedPublications(publication.type, publication.id) : []

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

  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Back Navigation */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <Link href="/research" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Research
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              {publication && (
                <>
                  <span className="inline-flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {getTypeLabel(publication.type)}
                  </span>
                  <span>•</span>
                  <span>{publication.year}</span>
                </>
              )}
              {study && (
                <>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(study.status)}`}>
                    {study.status.charAt(0).toUpperCase() + study.status.slice(1)}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Started {formatDate(study.startDate)}
                  </span>
                </>
              )}
              {article.readingTime && (
                <>
                  <span>•</span>
                  <span className="inline-flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readingTime} min read
                  </span>
                </>
              )}
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Article Description */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {article.description}
            </p>

            {/* Authors */}
            {publication && publication.authors && publication.authors.length > 0 && (
              <div className="flex items-center gap-2 mb-8">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">
                  By {publication.authors.join(', ')}
                </span>
              </div>
            )}

            {/* Journal Info */}
            {publication && publication.journal && (
              <div className="flex items-center gap-2 mb-8">
                <FileText className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{publication.journal}</span>
              </div>
            )}

            {/* Share Button */}
            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm" className="inline-flex items-center">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              {publication && publication.url && (
                <Button variant="outline" size="sm" asChild>
                  <a href={publication.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Original
                  </a>
                </Button>
              )}
            </div>

            {/* Article Image */}
            {article.imageUrl && (
              <div className="mb-8">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    This research represents a significant contribution to the field of alternative medicine. 
                    Our comprehensive study explores the efficacy and mechanisms of treatment approaches that 
                    have shown promising results in clinical settings.
                  </p>
                  
                  {study && (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Study Overview</h3>
                      <p>
                        This ongoing research study aims to advance our understanding of alternative medicine 
                        practices and their applications in modern healthcare. The study involves multiple 
                        research centers and participants to ensure comprehensive data collection and analysis.
                      </p>
                      
                      <div className="bg-gray-50 p-6 rounded-lg mt-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Study Details</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Start Date:</span> {formatDate(study.startDate)}
                          </div>
                          {study.endDate && (
                            <div>
                              <span className="font-medium">Expected End:</span> {formatDate(study.endDate)}
                            </div>
                          )}
                          {study.participants && (
                            <div>
                              <span className="font-medium">Participants:</span> {study.participants}
                            </div>
                          )}
                          {study.centers && (
                            <div>
                              <span className="font-medium">Research Centers:</span> {study.centers}
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {publication && (
                    <>
                      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Research Findings</h3>
                      <p>
                        Our research demonstrates significant findings in the field of alternative medicine. 
                        The study methodology was rigorous and comprehensive, involving multiple phases of 
                        data collection and analysis.
                      </p>
                      
                      <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Key Results</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Improved patient outcomes in treatment groups</li>
                        <li>Enhanced understanding of treatment mechanisms</li>
                        <li>Validation of traditional medicine practices</li>
                        <li>Identification of optimal treatment protocols</li>
                      </ul>
                    </>
                  )}

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h3>
                  <p>
                    This research contributes valuable insights to the growing body of evidence supporting 
                    alternative medicine approaches. The findings have important implications for clinical 
                    practice and future research directions in integrative healthcare.
                  </p>
                </div>
              )}
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Articles */}
        {relatedPublications.length > 0 && (
          <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPublications.map((pub) => (
                    <Card key={pub.id} className="clean-card hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-500">{getTypeLabel(pub.type)} • {pub.year}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                          {pub.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {pub.description}
                        </p>
                        <Link href={`/research/${pub.slug}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            Read More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
