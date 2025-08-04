import RouteGuard from '@/components/auth/RouterGuard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '체험 관리',
  description: '나만의 체험을 등록하고 관리하세요.',
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <RouteGuard>{children}</RouteGuard>;
}
