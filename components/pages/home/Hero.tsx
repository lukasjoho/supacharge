import Container from '@/components/layout/Container';
import GoToAppButton from '@/components/shared/GoToAppButton';
import Title from '@/components/shared/Title';
import { Button } from '@/components/ui/button';
import Variants from './Variants';
import HeroWord from './Variants/HeroWord';

const Hero = () => {
  return (
    <section id="hero">
      <Container className="flex flex-col items-center space-y-8">
        <div className="flex flex-col gap-7 items-center">
          <Variants />
          <Title
            as="h1"
            className="text-5xl md:text-6xl xl:text-8xl text-center order-first md:order-last"
          >
            Experiment <br /> <HeroWord />
          </Title>
        </div>
        <p className="text-base md:text-lg text-muted-foreground sm:text-xl text-center px-4 max-w-[900px]">
          Uplift is an experimentation platform for modern product and
          engineering teams streamlining the management and deployment of your
          experiments. Accelerate your growth by bringing experiment visibility,
          data focus and hypothesis-centricity to your team.
        </p>
        <div className="flex gap-2">
          <GoToAppButton />
          <Button variant="outline">View demo</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
