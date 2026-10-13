import TargaAI from '../../components/TargaAI';

export const metadata = {
  title: 'Schedule a Conversation - TARGA',
  description: 'Start the conversation with the TARGA team.',
  alternates: { canonical: 'https://targa.ai/contact' },
};

export default function Page() {
  return <TargaAI page="contact" />;
}
