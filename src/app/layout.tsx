import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://medicalhomeopathyschool.edu.ng'),
  title: {
    default: 'MOCHAM | First and Best Medical & Homeopathy School Nigeria',
    template: '%s | Medical & Homeopathy School Nigeria'
  },
  description: 'Leading medical and homeopathy school in Nigeria offering comprehensive alternative medicine education with integrated clinic services. Accredited programs, expert faculty, and hands-on clinical training.',
  keywords: [
    'medical school Nigeria',
    'homeopathy education',
    'alternative medicine school',
    'medical clinic Nigeria',
    'holistic medicine training',
    'naturopathy school'
  ],
  authors: [{ name: 'Medical & Homeopathy School Nigeria' }],
  creator: 'Medical & Homeopathy School Nigeria',
  publisher: 'Medical & Homeopathy School Nigeria',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://medicalhomeopathyschool.edu.ng',
    title: 'Medical & Homeopathy School Nigeria',
    description: 'Premier alternative medicine education with integrated clinic services',
    siteName: 'Medical & Homeopathy School Nigeria',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical & Homeopathy School Nigeria',
    description: 'Premier alternative medicine education with integrated clinic services',
    creator: '@MedHomeoSchoolNG',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="homeopathy-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
