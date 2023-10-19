'use client';

import { FC, createContext, useState } from 'react';

interface MobileHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const MobileHeaderContext = createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

const MobileHeaderProvider: FC<MobileHeaderProps> = ({
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { className, ...rest } = props;
  return (
    <MobileHeaderContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileHeaderContext.Provider>
  );
};

export default MobileHeaderProvider;
