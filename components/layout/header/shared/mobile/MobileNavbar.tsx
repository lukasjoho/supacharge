import React from 'react';
import Container from '../../../Container';

interface MobileNavbarProps {
  children: React.ReactNode;
}

const MobileNavbar = ({ children }: MobileNavbarProps) => {
  return (
    <Container className="relative border-b bg-background z-10">
      <div className="flex h-14 items-center justify-between">{children}</div>
    </Container>
  );
};

export default MobileNavbar;
