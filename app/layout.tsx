import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { PersonJsonLd } from "@/components/seo/person-json-ld"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const siteUrl = "https://mohamedelafia.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Mohamed El Afia | Cloud-Native Software Engineer",
    template: "%s | Mohamed El Afia",
  },

  description:
    "Mohamed El Afia is a Cloud-Native Software Engineer specializing in AI, DevOps, Kubernetes, distributed systems, microservices, and full-stack development.",

  keywords: [
    "Mohamed El Afia",
    "Software Engineer",
    "Cloud-Native Software Engineer",
    "Cloud Engineer",
    "DevOps Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "Kubernetes",
    "Docker",
    "Microservices",
    "Distributed Systems",
    "Spring Boot",
    "Next.js",
    "FastAPI",
    "Python",
    "Java",
    "TypeScript",
  ],

  authors: [
    {
      name: "Mohamed El Afia",
      url: siteUrl,
    },
  ],
  verification: {
    google:
      "VZjpXfiMR7c9rxFXSplnWG1CEu6gcSTFZNqXPLEc5aQ",
  },


  creator: "Mohamed El Afia",
  publisher: "Mohamed El Afia",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mohamed El Afia Portfolio",

    title:
      "Mohamed El Afia | Cloud-Native Software Engineer",

    description:
      "Cloud-Native Software Engineer specializing in AI, DevOps, Kubernetes, distributed systems, microservices, and full-stack development.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt:
          "Mohamed El Afia - Cloud-Native Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mohamed El Afia | Cloud-Native Software Engineer",

    description:
      "Cloud-Native Software Engineer specializing in AI, DevOps, Kubernetes, distributed systems, and full-stack development.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f8fafc",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0a0a0f",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        <PersonJsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {process.env.NODE_ENV === "production" && (
          <Analytics />
        )}
      </body>
    </html>
  )
}