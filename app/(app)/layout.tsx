import AppHeader from '@/components/layout/header/app/AppHeader';
import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default AppLayout;
