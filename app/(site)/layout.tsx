import Siteheader from '@/components/layout/header/siteheader';

interface SiteLayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

const SiteLayout = ({ children, modal }: SiteLayoutProps) => {
  return (
    <>
      <Siteheader />
      {modal}
      {children}
    </>
  );
};

export default SiteLayout;
