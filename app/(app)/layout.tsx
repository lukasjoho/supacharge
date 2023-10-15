import Teamheader from '@/components/layout/teamheader';
import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Teamheader />
      {children}
    </>
  );
};

export default AppLayout;
