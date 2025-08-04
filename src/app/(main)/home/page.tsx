import Banner from '@/components/home/Banner';
import MostCommentedActivities from '@/components/home/MostCommentedActivities';
import AllActivities from '@/components/home/AllActivities';

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
