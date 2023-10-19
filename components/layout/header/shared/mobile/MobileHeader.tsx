import React from 'react';
import MobileHeaderProvider from './MobileHeaderProvider';

interface MobileHeaderProps {
  children: React.ReactNode;
}

const MobileHeader = ({ children }: MobileHeaderProps) => {
  return (
    <MobileHeaderProvider>
      <div className="bg-background relative z-40">{children}</div>
    </MobileHeaderProvider>
  );
};

export default MobileHeader;
