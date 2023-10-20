import Container from '@/components/layout/Container';
import GoToAppButton from '@/components/shared/GoToAppButton';
import Title from '@/components/shared/Title';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Variants from './Variants';
import HeroWord from './Variants/HeroWord';

interface HeroIconProps {
  src: string;
  side: 'left' | 'right';
}

const HeroIcon = ({ src, side }: HeroIconProps) => {
  return (
    <img
      src={src}
      alt=""
      className={cn(
        'w-20 sm:w-28 md:w-32 lg:w-40 absolute -top-4 sm:top-8 md:top-1/3 -translate-y-1/2 opacity-75',
        side == 'left' ? 'left-0' : 'right-0'
      )}
    />
  );
};

const Hero = () => {
  return (
    <section id="hero">
      <Container>
        <div className="relative flex flex-col items-center gap-8">
          <HeroIcon src="rolloutiterate.svg" side="left" />
          <HeroIcon src="uplifts.svg" side="right" />

          <div className="relative flex flex-col gap-7 items-center">
            <Variants />
            <Title
              as="h1"
              className="text-[2.5rem] leading-[2.75rem] md:text-6xl lg:text-7xl 2xl:text-8xl text-center order-first md:order-last"
            >
              <div className="animation-fade-in animation-delay-100">
                Experiment
              </div>
              <HeroWord className="animation-fade-in animation-delay-200" />
            </Title>
          </div>
          <p className="text-base md:text-lg text-muted-foreground sm:text-xl text-center px-4 max-w-[900px] animation-fade-in animation-delay-300">
            Supacharge is an experimentation platform for modern product and
            engineering teams. Accelerate your product growth by streamlining
            the management, deployment and analysis of your experiments.
          </p>
          <div className="flex gap-2">
            <GoToAppButton />
            <Button variant="outline">View demo</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
