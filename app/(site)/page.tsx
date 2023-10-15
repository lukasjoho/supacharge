import GetStarted from '@/components/pages/home/GetStarted';
import Hero from '@/components/pages/home/Hero';

const HomePage = async () => {
  return (
    <div className="py-24 space-y-32">
      <Hero />
      <GetStarted />
    </div>
  );
};

export default HomePage;
