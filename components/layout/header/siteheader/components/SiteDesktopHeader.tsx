import Container from '@/components/layout/Container';
import BrandLogo from '@/components/shared/BrandLogo';
import GoToAppButton from '@/components/shared/GoToAppButton';

const SiteDesktopHeader = () => {
  return (
    <div className="border-b">
      <Container className="flex items-center justify-between h-16">
        <BrandLogo />
        <GoToAppButton />
      </Container>
    </div>
  );
};

export default SiteDesktopHeader;
