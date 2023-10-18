import Footer from '@/components/layout/Footer';
import Siteheader from '@/components/layout/header/siteheader';

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <Siteheader />
      {children}
      <Footer />
    </>
  );
};

export default SiteLayout;
