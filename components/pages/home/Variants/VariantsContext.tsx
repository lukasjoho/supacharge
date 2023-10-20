'use client';

import { createContext, useContext, useState } from 'react';
import { Experiment, Variant, generateExperiment, variants } from './config';

export const VariantsContext = createContext({
  experiment: {} as Omit<Experiment, 'variants' | 'decision'>,
  setExperiment: (experiment: any) => {},
  activeVariantId: 'a',
  setActiveVariantId: (variantId: string) => {},
  activeVariants: [] as Variant[],
  setActiveVariants: (variants: Variant[]) => {},
});

export const useVariants = () => {
  return useContext(VariantsContext);
};

export function computeWeightForVariants(
  variants: Variant[]
): (Variant & { weight: number })[] {
  const weight = 1 / variants.length;
  return variants.map((variant) => ({
    ...variant,
    weight: Number(weight.toFixed(4)),
  }));
}

export const VariantsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeVariantId, setActiveVariantId] = useState('a');
  const [activeVariants, setActiveVariants] = useState(variants.slice(0, 3));
  const [experiment, setExperiment] = useState(generateExperiment(new Date()));

  return (
    <VariantsContext.Provider
      value={{
        experiment,
        setExperiment,
        activeVariantId,
        setActiveVariantId,
        activeVariants,
        setActiveVariants,
      }}
    >
      {children}
    </VariantsContext.Provider>
  );
};
