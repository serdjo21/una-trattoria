import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://unatrattoria.rs"; // promijeni
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/menu`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}