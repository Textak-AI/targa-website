import TargaAI from '../../components/TargaAI';

export const metadata = {
  title: '100 CEO Conversations - TARGA',
  description: 'A 30-minute conversation with our CEO about how you run the company from the plan down.',
  alternates: { canonical: 'https://targa.ai/100-ceos' },
};

export default function Page() {
  return <TargaAI page="ceo100" />;
}
