import './globals.css';

export const metadata = {
  metadataBase: new URL('https://targa.ai'),
  title: {
    default: 'TARGA - Speed and Clarity for Enterprise Value Creation',
    template: '%s',
  },
  description: 'TARGA is a leadership intelligence platform built for executives. Your strategy lives in TARGA with a name on every action, and the work your team does creates the status you see.',
  openGraph: {
    title: 'TARGA - Speed and Clarity for Enterprise Value Creation',
    description: 'TARGA is a leadership intelligence platform built for executives. Your strategy lives in TARGA with a name on every action, and the work your team does creates the status you see.',
    url: 'https://targa.ai',
    siteName: 'TARGA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TARGA - Speed and Clarity for Enterprise Value Creation',
    description: 'TARGA is a leadership intelligence platform built for executives. Your strategy lives in TARGA with a name on every action, and the work your team does creates the status you see.',
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
      description: 'Targatek Inc. makes TARGA, a leadership intelligence platform built for executives. Your strategy lives in TARGA with a name on every action, and the work your team does creates the status you see, so the whole leadership team is working from the same picture. TARGA\'s guidance gets better the more you use it, and the decisions stay yours. Every company has AI now. TARGA uses it where it changes results: watching the plan between meetings and flagging what needs attention, so your team acts sooner.',
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
      description: 'Targatek Inc. makes TARGA, a leadership intelligence platform built for executives. Your strategy lives in TARGA with a name on every action, and the work your team does creates the status you see, so the whole leadership team is working from the same picture. TARGA\'s guidance gets better the more you use it, and the decisions stay yours. Every company has AI now. TARGA uses it where it changes results: watching the plan between meetings and flagging what needs attention, so your team acts sooner.',
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
