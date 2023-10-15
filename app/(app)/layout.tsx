import Spaceheader from '@/components/layout/spaceheader';
import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Spaceheader />
      {children}
    </>
  );
};

export default AppLayout;
