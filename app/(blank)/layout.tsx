import BlankHeader from '@/components/layout/BlankHeader';

interface BlankLayoutProps {
  children: React.ReactNode;
}

const BlankLayout = ({ children }: BlankLayoutProps) => {
  return (
    <>
      <BlankHeader />
      {children}
    </>
  );
};

export default BlankLayout;
