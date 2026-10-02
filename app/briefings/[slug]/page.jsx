import { notFound } from 'next/navigation';
import { BriefingLIvsPPM } from '../../../components/Briefings';
import { BRIEFINGS, BRIEFING_FAQ } from '../../../components/content';

const PAGES = { 'leadership-intelligence-vs-ppm': BriefingLIvsPPM };

export function generateStaticParams() {
  return BRIEFINGS.filter((b) => b.live && b.slug).map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }) {
  const b = BRIEFINGS.find((x) => x.slug === params.slug);
  if (!b) return {};
  return {
    title: b.short + ' - TARGA Briefings',
    description: b.answer,
    alternates: { canonical: 'https://targa.ai/briefings/' + b.slug },
    openGraph: { title: b.title, description: b.answer, url: 'https://targa.ai/briefings/' + b.slug, type: 'article' },
  };
}

export default function Page({ params }) {
  const Comp = PAGES[params.slug];
  const b = BRIEFINGS.find((x) => x.slug === params.slug);
  if (!Comp || !b) notFound();
  const schema = [
    {
      '@context': 'https://schema.org', '@type': 'Article',
      headline: b.title, description: b.answer, datePublished: b.publishedISO || b.dateISO, dateModified: b.dateISO,
      author: { '@type': 'Organization', name: 'Targatek Inc.', url: 'https://targa.ai' },
      publisher: { '@type': 'Organization', name: 'Targatek Inc.', url: 'https://targa.ai' },
      mainEntityOfPage: 'https://targa.ai/briefings/' + b.slug,
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: BRIEFING_FAQ.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Comp />
    </>
  );
}
