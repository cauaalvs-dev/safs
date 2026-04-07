import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sociedadesafs.org'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
  ]
}
