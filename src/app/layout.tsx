import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDFBF7" },
    { media: "(prefers-color-scheme: dark)", color: "#050D1A" },
  ],
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sreevalmeekischool.in'),
  title: "Sree Valmeeki E.M School – Nursery to 10th Class | English Medium School in Kadiri",
  description:
    "Sree Valmeeki E.M School – Nursery to 10th Class is an English-medium co-educational school in Kadiri offering education from Nursery to Class 10 with smart learning, IIT Foundation, Olympiad preparation, Spoken English and transport facilities.",
  keywords: [
    "Sree Valmeeki E.M School – Nursery to 10th Class",
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
  authors: [{ name: "Sree Valmeeki E.M School – Nursery to 10th Class" }],
  icons: {
    icon: [
      { url: '/favicon.ico?v=20261022', sizes: 'any' },
      { url: '/favicon-32x32.png?v=20261022', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=20261022', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=20261022', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest?v=20261022',
  openGraph: {
    title: "Sree Valmeeki E.M School – Nursery to 10th Class | English Medium School in Kadiri",
    description:
      "Sree Valmeeki E.M School – Nursery to 10th Class is an English-medium co-educational school in Kadiri offering education from Nursery to Class 10 with smart learning, IIT Foundation, and Olympiad preparation.",
    url: "https://www.sreevalmeekischool.in",
    siteName: "Sree Valmeeki E.M School – Nursery to 10th Class",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Valmeeki E.M School – Nursery to 10th Class | English Medium School in Kadiri",
    description:
      "English-medium co-educational school in Kadiri. Nursery to Class 10. Smart learning, IIT Foundation, Olympiad preparation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.sreevalmeekischool.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=20261022" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=20261022" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=20261022" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=20261022" />
        <link rel="manifest" href="/site.webmanifest?v=20261022" />
        <meta name="apple-mobile-web-app-title" content="Sree Valmeeki" />
        <meta name="application-name" content="Sree Valmeeki" />
        <meta name="msapplication-TileColor" content="#0A1628" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('svhs_theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.classList.remove('dark');document.documentElement.setAttribute('data-theme','light');}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["EducationalOrganization", "School"],
              name: "Sree Valmeeki E.M School",
              alternateName: ["Sree Valmeeki High School", "Valmeeki School Kadiri"],
              description:
                "English-medium co-educational school in Kadiri offering education from Nursery to Class 10 with smart classrooms, IIT Foundation, and Olympiad mentoring.",
              url: "https://www.sreevalmeekischool.in",
              logo: "https://www.sreevalmeekischool.in/logo.png",
              image: "https://www.sreevalmeekischool.in/images/campus/school_entrance_gate.jpg",
              telephone: "+919440468838",
              email: "info@sreevalmeekischool.in",
              foundingDate: "1999-06-06",
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
                latitude: "14.1118",
                longitude: "78.1561",
              },
              sameAs: [
                "https://www.facebook.com/Sree-valmeeki-high-school-1574341916174521/",
                "https://www.youtube.com/@Dhanunjay-t5v",
                "https://instagram.com",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
