import Siteheader from '@/components/layout/header/siteheader';

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <Siteheader />
      {children}
    </>
  );
};

export default SiteLayout;
