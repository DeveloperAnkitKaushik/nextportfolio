import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://kaushikankit.vercel.app',
      lastModified: new Date(),
    },
  ]
}