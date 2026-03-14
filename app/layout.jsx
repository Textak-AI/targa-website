import './globals.css';

export const metadata = {
  title: 'TARGA AI — Speed and Clarity for Enterprise Value Creation',
  description: 'TARGA AI gives executives cross-functional visibility — turning strategic goals into measurable outcomes with AI-driven insight into what drives enterprise value.',
  openGraph: {
    title: 'TARGA AI — The Leader Experience™',
    description: 'Speed and clarity for enterprise value creation.',
    url: 'https://targa.ai',
    siteName: 'TARGA AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TARGA AI — Speed and Clarity for Enterprise Value Creation',
    description: 'The Leader Experience™ — giving executives cross-functional visibility into what drives enterprise value.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
