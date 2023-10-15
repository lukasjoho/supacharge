'use client';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FC, createContext, useContext, useState } from 'react';

import Container from '@/components/layout/Container';
import LoginButton from '@/components/shared/LoginButton';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SITE_NAV_ITEMS } from '../lib/site-nav-items';

const MobileHeaderContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

interface MobileHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const MobileHeader: FC<MobileHeaderProps> = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { className, ...rest } = props;
  return (
    <MobileHeaderContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        {...rest}
        className={cn('fixed top-0 z-40 w-full bg-background', className)}
      >
        <Container>
          <div className="relative flex h-12 items-center justify-between">
            <ToggleMenu />
            <LoginButton />
          </div>
        </Container>
        <MobileMenu />
      </div>
    </MobileHeaderContext.Provider>
  );
};

export default MobileHeader;

const ToggleMenu = () => {
  const { isOpen, setIsOpen } = useContext(MobileHeaderContext);
  return (
    <div onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
      {isOpen ? <X /> : <Menu />}
    </div>
  );
};

const MobileMenu = () => {
  const { isOpen, setIsOpen } = useContext(MobileHeaderContext);
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
          <Container>
            <nav className="pb-3">
              <ul>
                {SITE_NAV_ITEMS.map((item) => {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-3xl block font-semibold text-center"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <LoginButton className="w-full" />
            </nav>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
