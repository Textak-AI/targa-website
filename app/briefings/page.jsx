import { BriefingsHub } from '../../components/Briefings';

export const metadata = {
  title: 'Briefings - TARGA',
  description: 'Straight answers to the questions executives ask about running the company from the plan down. Leadership intelligence, explained for executives.',
  alternates: { canonical: 'https://targa.ai/briefings' },
};

export default function Page() {
  return <BriefingsHub />;
}
