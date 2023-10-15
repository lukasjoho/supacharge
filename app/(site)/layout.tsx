import Header from '@/components/layout/header';

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SiteLayout;
