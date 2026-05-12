import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const articlesPath = path.join(process.cwd(), 'src/content/articles.json')
  let articles = []

  try {
    const data = fs.readFileSync(articlesPath, 'utf-8')
    articles = JSON.parse(data).filter((a: any) => a.status === 'published')
  } catch (e) {
    articles = []
  }

  const baseUrl = 'https://erasmus-madrid.vercel.app'

  const staticUrls = [
    { loc: baseUrl, priority: '1.0', changefreq: 'weekly' },
    { loc: `${baseUrl}/articles`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/mentions-legales`, priority: '0.3', changefreq: 'yearly' },
  ]

  const articleUrls = articles.map((a: any) => ({
    loc: `${baseUrl}/articles/${a.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date(a.updatedAt || a.createdAt).toISOString().split('T')[0],
  }))

  const allUrls = [...staticUrls, ...articleUrls]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
    ${(u as any).lastmod ? `<lastmod>${(u as any).lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
