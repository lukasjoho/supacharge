import Appheader from '@/components/layout/header/appheader';
import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Appheader />
      {children}
    </>
  );
};

export default AppLayout;
