import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/context/LanguageContext";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });


export const metadata: Metadata = {
  metadataBase: new URL("https://unatrattoria.rs"),
  title: {
    default: "Pizza Una Trattoria",
    template: "%s — Una Trattoria",
  },
  description:
    "Italijanske pice i specijaliteti u srcu Beograda. Originalna napoletana pizza, sveže paste i autentični ukusi Italije na Vračaru.",

  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: "https://unatrattoria.rs",
    siteName: "Una Trattoria",
    title: "Pizza Una Trattoria",
    description:
      "Italijanske pice i specijaliteti u srcu Beograda. Originalna napoletana pizza, sveže paste i autentični ukusi Italije na Vračaru.",
    images: [
      {
        url: new URL("/ogv2.jpg", "https://unatrattoria.rs").toString(),
        width: 1200,
        height: 630,
        alt: "Una Trattoria",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pizza Una Trattoria",
    description:
      "Italijanske pice i specijaliteti u srcu Beograda. Originalna napoletana pizza, sveže paste i autentični ukusi Italije na Vračaru.",
    images: [new URL("/og.jpg", "https://unatrattoria.rs").toString()],
  },

  appleWebApp: {
    capable: true,
    title: "Una Trattoria",
    statusBarStyle: "black-translucent",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
       <Head>
        <title>Una Trattoria</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:image" content="/public/ogv2.jpg" />
        <meta property="og:title" content="Una Trattoria" />
      </Head>
      <body className="min-h-screen">
        <LanguageProvider>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights/>
        <Analytics/>
        </LanguageProvider>
      </body>
    </html>
  );
}