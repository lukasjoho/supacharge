'use client';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import { useVariants } from './VariantsContext';

import { HTMLMotionProps, motion } from 'framer-motion';

const Variants = () => {
  const { activeVariants, setActiveVariants } = useVariants();
  return (
    <div className="space-x-2">
      {activeVariants.map((variant) => (
        <VariantButton
          key={variant.id}
          style={{
            borderColor: variant.color,
            backgroundColor: `${variant.color}50`,
          }}
          id={variant.id}
        >{`Variant ${variant.id.toUpperCase()}`}</VariantButton>
      ))}
    </div>
  );
};

export default Variants;

interface VariantButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  id: string;
}

const VariantButton = ({ children, id, ...props }: VariantButtonProps) => {
  const { className, ...rest } = props;
  const { activeVariantId, setActiveVariantId } = useVariants();
  const isActive = activeVariantId === id;
  return (
    <motion.button
      onClick={() => setActiveVariantId(id)}
      whileTap={{ scale: 0.9 }}
      className={cn(
        buttonVariants(),
        'transition duration-100 border text-white opacity-30 hover:brightness-125 h-7 md:h-8 text-xs px-2',
        className,
        isActive && 'opacity-100'
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
