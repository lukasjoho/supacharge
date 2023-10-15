import Container from '@/components/Container';
import BrandLogo from '@/components/shared/BrandLogo';
import { Button } from '@/components/ui/button';

const DesktopHeader = () => {
  return (
    <div className="border-b">
      <Container className="flex items-center justify-between h-16">
        <BrandLogo />
        <Button>Login</Button>
      </Container>
    </div>
  );
};

export default DesktopHeader;
