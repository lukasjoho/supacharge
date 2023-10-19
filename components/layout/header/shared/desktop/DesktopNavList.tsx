import React from 'react';

interface DesktopNavListProps {
  children: React.ReactNode;
}

const DesktopNavList = ({ children }: DesktopNavListProps) => {
  return (
    <nav className="mr-auto">
      <ul className="flex">{children}</ul>
    </nav>
  );
};

export default DesktopNavList;
