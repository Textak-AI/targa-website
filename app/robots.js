export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/mockup', '/reference', '/guide'] }],
    sitemap: 'https://targa.ai/sitemap.xml',
  };
}
