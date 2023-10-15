import Container from '@/components/layout/Container';
import LoginOrDashboardButton from '@/components/shared/LoginOrDashboardButton';
import Title from '@/components/shared/Title';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero">
      <Container className="flex flex-col items-center space-y-8">
        <Title as="h1" className="text-9xl text-center">
          Experiment <br /> relentlessly
        </Title>
        <p className="text-lg text-muted-foreground sm:text-xl text-center">
          Uplift is an experimentation platform for modern product and
          engineering teams streamlining the management and deployment of your
          experiments. Accelerate your growth by bringing experiment visibility,
          data focus and hypothesis-centricity to your team.
        </p>
        <div className="flex gap-2">
          <LoginOrDashboardButton loggedOut="Get Started" />
          <Button variant="outline">View demo</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
