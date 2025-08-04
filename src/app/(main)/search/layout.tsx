import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '검색',
  description: '원하는 체험을 검색하고 예약하세요.',
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}