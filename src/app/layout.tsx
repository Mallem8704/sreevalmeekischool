import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sree Valmeeki High School | English Medium School in Kadiri",
  description:
    "Sree Valmeeki High School is an English-medium co-educational school in Kadiri offering education from Nursery to Class 10 with smart learning, IIT Foundation, Olympiad preparation, Spoken English and transport facilities.",
  keywords: [
    "Sree Valmeeki High School",
    "Kadiri school",
    "English medium school Kadiri",
    "best school in Kadiri",
    "SSC school Kadiri",
    "CBSE school Kadiri",
    "IIT Foundation Kadiri",
    "Olympiad preparation Kadiri",
    "school admissions Kadiri",
    "Andhra Pradesh school",
  ],
  authors: [{ name: "Sree Valmeeki High School" }],
  openGraph: {
    title: "Sree Valmeeki High School | English Medium School in Kadiri",
    description:
      "Sree Valmeeki High School is an English-medium co-educational school in Kadiri offering education from Nursery to Class 10 with smart learning, IIT Foundation, and Olympiad preparation.",
    url: "https://www.sreevalmeekischool.com",
    siteName: "Sree Valmeeki High School",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Valmeeki High School | English Medium School in Kadiri",
    description:
      "English-medium co-educational school in Kadiri. Nursery to Class 10. Smart learning, IIT Foundation, Olympiad preparation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.sreevalmeekischool.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Sree Valmeeki High School",
              description:
                "English-medium co-educational school in Kadiri offering education from Nursery to Class 10",
              url: "https://www.sreevalmeekischool.com",
              telephone: "+919440468838",
              foundingDate: "1999",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Madanapalli Road / NH-205, Near Chowdeswari Temple",
                addressLocality: "Kadiri",
                addressRegion: "Andhra Pradesh",
                postalCode: "515591",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "14.1155",
                longitude: "78.1597",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
