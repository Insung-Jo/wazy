import ClientActivitiesPage from '@/components/activities/ClientActivitiesPage';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: '체험 상세',
  description: '체험의 상세 정보를 확인하고 예약하세요.',
};

const ActivityPage = async ({ params }: Props) => {
  const { id: idStr } = await params;
  const id = Number(idStr);

  return <ClientActivitiesPage id={id} />;
};

export default ActivityPage;
