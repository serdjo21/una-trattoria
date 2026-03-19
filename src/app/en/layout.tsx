import "../globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FooterEn from "./FooterEn";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL("https://unatrattoria.rs"),
  title: {
    default: "Pizza Una Trattoria",
    template: "%s — Una Trattoria",
  },
  description:
    "Italian pizzas and specialties in the heart of Belgrade. Authentic Neapolitan pizza, fresh pasta, and genuine flavors of Italy.",

  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: "https://unatrattoria.rs",
    siteName: "Una Trattoria",
    title: "Pizza Una Trattoria",
    description:
      "Italian pizzas and specialties in the heart of Belgrade. Authentic Neapolitan pizza, fresh pasta, and genuine flavors of Italy.",
    images: [
      {
        url: new URL("/og.jpg", "https://unatrattoria.rs").toString(),
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
      "Italian pizzas and specialties in the heart of Belgrade. Authentic Neapolitan pizza, fresh pasta, and genuine flavors of Italy.",
    images: [new URL("/og.jpg", "https://unatrattoria.rs").toString()],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <Head>
        <title>Una Trattoria</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:title" content="Una Trattoria" />
      </Head>
      <body className="min-h-screen">
        <Navbar />
        {children}
        <FooterEn />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}