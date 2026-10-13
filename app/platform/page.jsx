import TargaAI from '../../components/TargaAI';

export const metadata = {
  title: 'The Platform - TARGA',
  description: 'TARGA is a leadership intelligence platform built for executives. See the whole business at a glance, with status that comes from the work itself.',
  alternates: { canonical: 'https://targa.ai/platform' },
};

export default function Page() {
  return <TargaAI page="platform" />;
}
