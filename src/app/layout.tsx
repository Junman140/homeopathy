import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mocham.org'),
  title: {
    default: 'MOCHAM | Homeopathy School Nigeria | Alternative Medicine Uyo',
    template: '%s | MOCHAM - Modern College of Homeopathy and Alternative Medicine'
  },
  description: 'MOCHAM - Nigeria\'s leading homeopathy school since 1982. Offering comprehensive alternative medicine education, accredited programs, and expert clinical training in Uyo, Akwa Ibom State.',
  keywords: [
    'MOCHAM',
    'homeopathy school Nigeria',
    'alternative medicine Nigeria',
    'medical college Uyo',
    'homeopathy education Nigeria',
    'homeopathy diploma Nigeria',
    'alternative medicine training',
    'holistic medicine school Nigeria',
    'naturopathy school Nigeria',
    'traditional medicine education',
    'homeopathy school Uyo',
    'medical school Akwa Ibom',
    'alternative medicine Uyo Nigeria',
    'medical clinic Uyo',
    'homoeopathic medicine training'
  ],
  authors: [{ name: 'MOCHAM - Modern College of Homeopathy and Alternative Medicine' }],
  creator: 'MOCHAM',
  publisher: 'MOCHAM',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://www.mocham.org',
    title: 'MOCHAM - Modern College of Homeopathy and Alternative Medicine',
    description: 'Nigeria\'s leading homeopathy and alternative medicine school since 1982. Accredited programs, expert faculty, and hands-on clinical training in Uyo, Akwa Ibom State.',
    siteName: 'MOCHAM',
    images: [
      {
        url: 'https://www.mocham.org/logo.png',
        width: 1200,
        height: 630,
        alt: 'MOCHAM - Modern College of Homeopathy and Alternative Medicine'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOCHAM - Modern College of Homeopathy and Alternative Medicine',
    description: 'Nigeria\'s leading homeopathy and alternative medicine school since 1982. Accredited programs in Uyo, Akwa Ibom State.',
    creator: '@MOCHAMNigeria',
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
