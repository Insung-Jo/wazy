import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '인증',
  description: 'WAZY에 로그인하거나 회원가입하여 다양한 체험을 예약하세요.',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
