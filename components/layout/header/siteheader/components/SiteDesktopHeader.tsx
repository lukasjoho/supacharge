import Container from '@/components/layout/Container';
import BrandLogo from '@/components/shared/BrandLogo';
import LoginOrDashboardButton from '@/components/shared/LoginOrDashboardButton';

const SiteDesktopHeader = () => {
  return (
    <div className="border-b">
      <Container className="flex items-center justify-between h-16">
        <BrandLogo />
        <LoginOrDashboardButton />
      </Container>
    </div>
  );
};

export default SiteDesktopHeader;
