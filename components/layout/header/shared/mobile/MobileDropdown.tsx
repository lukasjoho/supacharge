'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import Container from '../../../Container';
import { MobileHeaderContext } from './MobileHeaderProvider';

interface MobileMenuProps {
  children: React.ReactNode;
}

const MobileDropdown = ({ children }: MobileMenuProps) => {
  const { isOpen } = useContext(MobileHeaderContext);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute  left-0 w-full overflow-hidden bg-background shadow-[0_5px_30px_-10px_rgba(148,_163,_184,_0.7)] z-0"
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
          <Container className="py-3 space-y-3">{children}</Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileDropdown;
