import Container from '@/components/Container';
import BrandLogo from '@/components/shared/BrandLogo';
import LoginButton from '@/components/shared/LoginButton';

const DesktopHeader = () => {
  return (
    <div className="border-b">
      <Container className="flex items-center justify-between h-16">
        <BrandLogo />
        <LoginButton />
      </Container>
    </div>
  );
};

export default DesktopHeader;
