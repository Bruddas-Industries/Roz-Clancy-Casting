import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Roz Clancy Casting & Productions | NJ Casting Director | Ewing, NJ",
    template: "%s | Roz Clancy Casting & Productions",
  },
  description:
    "Roz Clancy Casting & Productions — New Jersey's trusted casting director for commercial, film, TV, voiceover, and theater. Serving NJ and PA. Serious talent only.",
  keywords: [
    "casting director New Jersey",
    "NJ casting agency",
    "commercial casting NJ",
    "film TV casting New Jersey",
    "voiceover casting NJ",
    "acting training Ewing NJ",
    "Roz Clancy Casting",
    "talent agency NJ",
    "casting director Ewing NJ",
    "PA casting agency",
  ],
  authors: [{ name: "Roz Clancy Casting & Productions" }],
  creator: "Roz Clancy Casting & Productions",
  metadataBase: new URL("https://rozclancycasting.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rozclancycasting.com",
    siteName: "Roz Clancy Casting & Productions",
    title: "Roz Clancy Casting & Productions | NJ Casting Director",
    description:
      "New Jersey's trusted casting director for commercial, film, TV, voiceover, and theater. Serving NJ and PA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roz Clancy Casting & Productions | NJ Casting Director",
    description:
      "New Jersey's trusted casting director for commercial, film, TV, voiceover, and theater.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Roz Clancy Casting & Productions",
  description:
    "Professional casting director for commercial, film, TV, voiceover, theater, and animation. Also offering acting and modeling training.",
  url: "https://rozclancycasting.com",
  telephone: "609-737-6955",
  email: "rozclancy@hotmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "206 Scotch Road, Glen Roc Plaza",
    addressLocality: "Ewing Township",
    addressRegion: "NJ",
    postalCode: "08628",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.2543,
    longitude: -74.7957,
  },
  areaServed: ["New Jersey", "Pennsylvania"],
  sameAs: ["https://www.facebook.com/RozClancyCastingProductions/"],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
