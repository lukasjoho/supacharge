import Header from '@/components/layout/header';

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default SiteLayout;
