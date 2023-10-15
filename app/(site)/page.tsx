import GetStarted from '@/components/pages/home/GetStarted';
import Hero from '@/components/pages/home/Hero';
import Link from 'next/link';

const HomePage = async () => {
  return (
    <div className="py-24 space-y-32">
      <Link href="/login">Zu Login</Link>
      <Hero />
      <GetStarted />
    </div>
  );
};

export default HomePage;
