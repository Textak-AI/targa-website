import TargaAI from '../components/TargaAI';
import { HOME_FAQ } from '../components/content';

export const metadata = {
  alternates: { canonical: 'https://targa.ai' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQ.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TargaAI page="home" />
    </>
  );
}
