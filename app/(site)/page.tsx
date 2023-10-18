import GetStarted from '@/components/pages/home/GetStarted';
import Hero from '@/components/pages/home/Hero';
import Playground from '@/components/pages/home/Playground';
import Testimonial from '@/components/pages/home/Testimonial';
import { VariantsProvider } from '@/components/pages/home/Variants/VariantsContext';
import Walkthrough from '@/components/shared/Walkthrough';

const HomePage = async () => {
  return (
    <div className="pt-12 md:pt-16 pb-32 md:pb-48 space-y-24 md:space-y-32">
      <VariantsProvider>
        <Hero />
        <Playground />
      </VariantsProvider>
      <Walkthrough />
      <Testimonial />
      <GetStarted />
    </div>
  );
};

export default HomePage;
