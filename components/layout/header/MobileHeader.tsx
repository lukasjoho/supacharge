'use client';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FC, createContext, useContext, useState } from 'react';

import Container from '@/components/layout/Container';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const MobileHeaderContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

interface MobileHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const MobileHeader: FC<MobileHeaderProps> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { className, ...rest } = props;
  return (
    <MobileHeaderContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        {...rest}
        className={cn('fixed top-0 z-40 w-full bg-background', className)}
      >
        {children}
      </div>
    </MobileHeaderContext.Provider>
  );
};

export default MobileHeader;

interface MobileNavbarProps {
  children: React.ReactNode;
}

export const MobileNavbar = ({ children }: MobileNavbarProps) => {
  return (
    <Container>
      <div className="relative flex h-12 items-center justify-between">
        {children}
      </div>
    </Container>
  );
};

export const ToggleMenu = () => {
  const { isOpen, setIsOpen } = useContext(MobileHeaderContext);
  return (
    <div onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
      {isOpen ? <X /> : <Menu />}
    </div>
  );
};

interface MobileMenuProps {
  children: React.ReactNode;
}

export const MobileMenu = ({ children }: MobileMenuProps) => {
  const { isOpen } = useContext(MobileHeaderContext);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute w-full overflow-hidden bg-background shadow-xl"
          initial={{
            height: 0,
          }}
          animate={{
            height: 'auto',
          }}
          exit={{
            height: 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.74, 0, 0.19, 1.02],
          }}
          key="mobile-menu"
        >
          <Container>{children}</Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
