import Circle from '@/components/pages/home/Circle';
import GetStarted from '@/components/pages/home/GetStarted';
import Hero from '@/components/pages/home/Hero';
import Playground from '@/components/pages/home/Playground';
import Testimonial from '@/components/pages/home/Testimonial';
import { VariantsProvider } from '@/components/pages/home/Variants/VariantsContext';

const HomePage = async () => {
  return (
    <div className="py-12 md:py-16 space-y-24 md:space-y-32 overflow-hidden">
      <VariantsProvider>
        <Hero />
        <Playground />
      </VariantsProvider>
      <Circle />
      <Testimonial />
      <GetStarted />
    </div>
  );
};

export default HomePage;
