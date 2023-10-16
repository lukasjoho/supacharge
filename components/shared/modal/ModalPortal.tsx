'use client';
import { useCallback, useContext, useEffect } from 'react';
import { DesktopModal } from './DesktopModal';
import MobileModal from './MobileModal';
import { ModalBackground } from './ModalBackground';
import { ModalContext } from './ModalContext';
import { useWindowSize } from './hooks/useWindowSize';

interface ModalPortalProps {
  children: React.ReactNode;
}
export function ModalPortal({ children }: ModalPortalProps) {
  const { windowSize, isMobile, isDesktop } = useWindowSize();
  const { hide } = useContext(ModalContext);
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        hide();
      }
    },
    [hide]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);
  return (
    <>
      <ModalBackground>
        {isMobile && (
          <MobileModal windowSize={windowSize}>{children}</MobileModal>
        )}
        {isDesktop && <DesktopModal>{children}</DesktopModal>}
      </ModalBackground>
    </>
  );
}
