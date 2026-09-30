import { BRIEFINGS } from '../components/content';

export default function sitemap() {
  const base = 'https://targa.ai';
  const now = new Date();
  const pages = ['', '/platform', '/about', '/100-ceos', '/contact', '/briefings', '/privacy', '/terms'].map((p) => ({ url: base + p, lastModified: now }));
  const briefings = BRIEFINGS.filter((b) => b.live && b.slug).map((b) => ({ url: base + '/briefings/' + b.slug, lastModified: new Date(b.dateISO) }));
  return [...pages, ...briefings];
}
