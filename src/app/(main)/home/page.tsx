import Banner from '@/components/home/Banner';
import MostCommentedActivities from '@/components/home/MostCommentedActivities';
import AllActivities from '@/components/home/AllActivities';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '홈',
  description: '다양한 체험과 액티비티를 둘러보고 예약하세요.',
};

export default function Home() {
  return (
    <main className='bg-main flex min-h-screen w-full flex-col py-40 md:py-80'>
      <div className='mx-auto w-full max-w-[1120px] px-24 md:px-30 lg:px-40'>
        <Banner />
        <MostCommentedActivities />
        <AllActivities />
      </div>
    </main>
  );
}
