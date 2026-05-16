import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mohamed El Afia | Cloud-Native Software Engineer',
  description: 'Cloud-Native Software Engineer specializing in AI, DevOps, Microservices, Distributed Systems, and Cloud Computing. Building scalable systems that power modern applications.',
  keywords: ['Software Engineer', 'Cloud Native', 'DevOps', 'AI', 'Machine Learning', 'Microservices', 'Kubernetes', 'Docker', 'Spring Boot', 'Next.js'],
  authors: [{ name: 'Mohamed El Afia' }],
  creator: 'Mohamed El Afia',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohamedelafia.dev',
    siteName: 'Mohamed El Afia Portfolio',
    title: 'Mohamed El Afia | Cloud-Native Software Engineer',
    description: 'Cloud-Native Software Engineer specializing in AI, DevOps, Microservices, and Cloud Computing.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohamed El Afia - Cloud-Native Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed El Afia | Cloud-Native Software Engineer',
    description: 'Cloud-Native Software Engineer specializing in AI, DevOps, Microservices, and Cloud Computing.',
    images: ['/og-image.png'],
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
