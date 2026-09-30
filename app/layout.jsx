import './globals.css';

export const metadata = {
  metadataBase: new URL('https://targa.ai'),
  title: {
    default: 'TARGA - Speed and Clarity for Enterprise Value Creation',
    template: '%s',
  },
  description: 'TARGA is a leadership intelligence platform built for executives. Your strategic plan lives in TARGA, the work your team does creates the status you see, and the decisions stay yours.',
  openGraph: {
    title: 'TARGA - Speed and Clarity for Enterprise Value Creation',
    description: 'A leadership intelligence platform built for executives. Task tools start with tasks. TARGA starts with strategy.',
    url: 'https://targa.ai',
    siteName: 'TARGA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TARGA - Speed and Clarity for Enterprise Value Creation',
    description: 'A leadership intelligence platform built for executives. Task tools start with tasks. TARGA starts with strategy.',
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://targa.ai/#organization',
      name: 'Targatek Inc.',
      url: 'https://targatek.com',
      sameAs: ['https://www.linkedin.com/company/targatek', 'https://targa.ai'],
      contactPoint: { '@type': 'ContactPoint', email: 'info@targa.ai', contactType: 'sales' },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://targa.ai/#product',
      name: 'TARGA',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://targa.ai',
      description: 'TARGA is a leadership intelligence platform built for executives. Your strategic plan lives in TARGA, the work your team does creates the status you see, and the decisions stay yours. Task tools start with tasks. TARGA starts with strategy.',
      manufacturer: { '@id': 'https://targa.ai/#organization' },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
