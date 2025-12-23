import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://unatrattoria.rs",
    siteName: "Una Trattoria",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Una Trattoria" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
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
    <html lang="sr-Latn" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}