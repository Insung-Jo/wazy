import { Toaster } from 'sonner';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'WAZY | 체험 예약 플랫폼',
    template: '%s | WAZY',
  },
  description: '다양한 체험을 예약하고 즐길 수 있는 플랫폼입니다.',
  keywords: ['체험', '예약', '액티비티', '여행', 'WAZY'],
  openGraph: {
    title: 'WAZY | 체험 예약 플랫폼',
    description: '다양한 체험을 예약하고 즐길 수 있는 플랫폼입니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'WAZY',
    images: [
      {
        url: '/imgs/og-main.png',
        width: 1200,
        height: 630,
        alt: 'WAZY 오픈그래프 대표 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAZY | 체험 예약 플랫폼',
    description: '다양한 체험을 예약하고 즐길 수 있는 플랫폼입니다.',
    images: ['/og-main.png'], // Next.js 13+ 기준 공식 지원
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='pt-40 md:pt-80'>
        {children}
        <Toaster position='top-right' richColors closeButton />
      </body>
    </html>
  );
}
