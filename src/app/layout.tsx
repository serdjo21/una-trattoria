import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";


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
    images: [new URL("/ogv2.jpg", "https://unatrattoria.rs").toString()],
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M3RQNWZ4');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M3RQNWZ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}