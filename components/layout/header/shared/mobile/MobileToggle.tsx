'use client';

import { Menu, X } from 'lucide-react';
import { useContext } from 'react';
import { MobileHeaderContext } from './MobileHeaderProvider';

const MobileToggle = () => {
  const { isOpen, setIsOpen } = useContext(MobileHeaderContext);
  return (
    <div onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
      {isOpen ? <X /> : <Menu />}
    </div>
  );
};

export default MobileToggle;
