import TargaAI from '../../components/TargaAI';

export const metadata = {
  title: 'About - TARGA',
  description: 'Targatek Inc. makes TARGA, a leadership intelligence platform built for executives.',
  alternates: { canonical: 'https://targa.ai/about' },
};

export default function Page() {
  return <TargaAI page="about" />;
}
