'use client';
import { useEffect } from 'react';
import { useModal } from '.';

const InterceptionModal = ({ children }: any) => {
  const { show, hide, setIsActiveInterception } = useModal();
  useEffect(() => {
    setIsActiveInterception(true);
    return () => setIsActiveInterception(false);
  }, []);
  useEffect(() => {
    show(children);
    return () => hide();
  }, []);
  return <></>;
};

export default InterceptionModal;
