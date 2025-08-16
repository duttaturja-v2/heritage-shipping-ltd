import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/components/auth-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "Heritage Shipping Limited - Chattogram Port Maritime Logistics",
  description:
    "Premium shipping and logistics services from Chattogram Port, Bangladesh. Trusted maritime solutions for sea freight, crew immigration, customs clearance, and supply chain management.",
  keywords: [
    "Heritage Shipping Limited",
    "Chattogram Port",
    "Bangladesh shipping",
    "maritime logistics",
    "sea freight",
    "crew immigration",
    "customs clearance",
    "port operations",
    "supply chain",
    "shipping company",
    "maritime services",
    "ocean freight",
    "cargo shipping",
    "logistics solutions",
  ],
  authors: [{ name: "Heritage Shipping Limited" }],
  creator: "Heritage Shipping Limited",
  publisher: "Heritage Shipping Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://heritageshipping.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Heritage Shipping Limited - Chattogram Port Maritime Logistics",
    description:
      "Premium shipping and logistics services from Chattogram Port, Bangladesh. Trusted maritime solutions for sea freight, crew immigration, and supply chain management.",
    url: "https://heritageshipping.com",
    siteName: "Heritage Shipping Limited",
    images: [
      {
        url: "/hsl-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Heritage Shipping Limited - HSL Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heritage Shipping Limited - Chattogram Port Maritime Logistics",
    description:
      "Premium shipping and logistics services from Chattogram Port, Bangladesh. Trusted maritime solutions for sea freight, crew immigration, and supply chain management.",
    images: ["/hsl-logo.jpeg"],
    creator: "@heritageshipping",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Maritime Logistics",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Heritage Shipping Limited",
              alternateName: "HSL",
              url: "https://heritageshipping.com",
              logo: "https://heritageshipping.com/hsl-logo.jpeg",
              description:
                "Premium shipping and logistics services from Chattogram Port, Bangladesh. Trusted maritime solutions for sea freight, crew immigration, and supply chain management.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Port Road",
                addressLocality: "Chattogram",
                addressCountry: "Bangladesh",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+880-31-123-4567",
                contactType: "customer service",
                email: "info@heritageshipping.com",
                availableLanguage: ["English", "Bengali"],
              },
              sameAs: [
                "https://facebook.com/heritageshipping",
                "https://linkedin.com/company/heritage-shipping-limited",
                "https://twitter.com/heritageshipping",
              ],
              foundingDate: "1999",
              numberOfEmployees: "50-100",
              industry: "Maritime Logistics",
              serviceArea: {
                "@type": "Place",
                name: "Global",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Maritime Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Sea Freight Services",
                      description: "Comprehensive ocean freight services for global shipping needs",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Crew Immigration Services",
                      description: "Seafarer documentation and visa processing services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Customs Clearance",
                      description: "Trade compliance and customs clearance services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Warehousing & Storage",
                      description: "Secure storage and inventory management solutions",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Heritage Shipping" />
        <link rel="apple-touch-icon" href="/hsl-logo.jpeg" />
        <link rel="icon" type="image/jpeg" href="/hsl-logo.jpeg" />
        <link rel="shortcut icon" href="/hsl-logo.jpeg" />
      </head>
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
