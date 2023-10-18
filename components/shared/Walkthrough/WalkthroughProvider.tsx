'use client';
import React, { createContext, useState } from 'react';

export const WalkthroughContext = createContext({
  activeStep: 0,
  setActiveStep: (step: number) => {},
});

const WalkthroughProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <WalkthroughContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </WalkthroughContext.Provider>
  );
};

export default WalkthroughProvider;
