import Footer from '@/components/layout/Footer';
import SiteHeader from '@/components/layout/header/site/SiteHeader';

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <SiteHeader />
      {children}
      <Footer />
    </>
  );
};

export default SiteLayout;
