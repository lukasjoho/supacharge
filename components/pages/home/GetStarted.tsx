import Container from '@/components/layout/Container';
import { Icons } from '@/components/shared/Icons';
import Title from '@/components/shared/Title';
import { Button } from '@/components/ui/button';

const GetStarted = () => {
  return (
    <section id="getstarted">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <Icons.logoBase className="w-32 md:w-64" />

          <Title className="text-center text-4xl md:text-7xl">
            Unleash the power <br />
            of experimentation now.
          </Title>
          <Button>Get Started</Button>
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
