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
import Image from "next/image"
import HeroCarousel from "@/components/hero-carousel"

// Type definitions
interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  publishedAt: string
  slug: string
}

interface HistoricalDocument {
  id: string
  title: string
  description: string
  documentType: string
  fileUrl: string | null
  year: number
  isFeatured: boolean
}

// Force TypeScript to re-evaluate types

export const metadata = {
  title: "News & Media | MOCHAM - Modern College of Homoeopathy/Alternative Medicine",
  description: "Stay updated with the latest news, research findings, and institutional updates from Nigeria's first and leading alternative medicine school.",
}

// Fetch news and historical documents from database
async function getNewsData(): Promise<NewsArticle[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, {
      cache: 'no-store'
    })
    if (!response.ok) throw new Error('Failed to fetch news')
    return await response.json()
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}

async function getHistoricalDocuments(): Promise<HistoricalDocument[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/historical-documents`, {
      cache: 'no-store'
    })
    if (!response.ok) throw new Error('Failed to fetch historical documents')
    return await response.json()
  } catch (error) {
    console.error('Error fetching historical documents:', error)
    return []
  }
}

export default async function NewsMediaPage() {
  // Fetch data from database
  const [newsData, historicalDocuments] = await Promise.all([
    getNewsData(),
    getHistoricalDocuments()
  ])

  // News and media related images
  const newsImages = [
    '/13.png',
    '/14.png',
    '/15.png',
    '/16.png',
    '/17.png',
    '/18.png',
  ]

  // Get featured news (first one) and latest news (next 5)
  const featuredNews = newsData.length > 0 ? newsData[0] : null
  const latestNews = newsData.slice(1, 6)
  
  return (
    <MainLayout>
      {/* Hero Section with Carousel */}
      <HeroCarousel 
        images={newsImages}
        title="News & Media"
        subtitle="Stay informed with the latest developments"
        description="Alternative medicine education and research updates"
      />

      {/* Featured Story */}
      {featuredNews && (
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
                      <span>{new Date(featuredNews.publishedAt).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <Tag className="h-4 w-4 mr-1" />
                      <span className="capitalize">{featuredNews.category}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredNews.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                        <span>{featuredNews.author}</span>
                    </div>
                      <Link href={`/news/${featuredNews.slug}`}>
                    <Button variant="outline" size="sm">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                      </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>
      )}

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
            {latestNews.length > 0 ? (
              latestNews.map((article: NewsArticle, index: number) => {
                const colors = [
                  'from-medical-green to-green-600',
                  'from-accent-orange to-orange-600',
                  'from-ucsf-blue to-blue-600'
                ]
                const colorClass = colors[index % colors.length]
                
                return (
                  <Card key={article.id} className="clean-card hover:shadow-lg transition-shadow">
                    <div className={`h-48 bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                <BookOpen className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <Tag className="h-4 w-4 mr-1" />
                        <span className="capitalize">{article.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                        {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                          <span>{article.author}</span>
                  </div>
                        <Link href={`/news/${article.slug}`}>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                        </Link>
                </div>
              </CardContent>
            </Card>
                )
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No News Articles Available</h3>
                <p className="text-gray-600">Check back later for the latest updates and news from MOCHAM.</p>
              </div>
            )}
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
            {historicalDocuments.filter((d: HistoricalDocument) => d.isFeatured).length > 0 ? (
              historicalDocuments.filter((d: HistoricalDocument) => d.isFeatured).map((document: HistoricalDocument) => (
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Historical Documents Available</h3>
                <p className="text-gray-600">Historical documents will be added as they become available.</p>
              </div>
            )}
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
                      <span className="text-dim-blue-600 dark:text-gray-300 ml-2">Mochams1@yahoo.com</span>
                    </div>
                    <div>
                      <strong className="text-dim-blue-800 dark:text-gray-100">Phone:</strong>
                      <span className="text-dim-blue-600 dark:text-gray-300 ml-2">+234-803-793-5596</span>
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
