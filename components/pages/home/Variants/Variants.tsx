'use client';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import { useVariants } from './VariantsContext';

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

interface VariantButtonProps extends ButtonProps {
  children: React.ReactNode;
  id: string;
}

const VariantButton = ({ children, id, ...props }: VariantButtonProps) => {
  const { className, ...rest } = props;
  const { activeVariantId, setActiveVariantId } = useVariants();
  const isActive = activeVariantId === id;
  return (
    <Button
      onClick={() => setActiveVariantId(id)}
      className={cn(
        'transition duration-100 border text-white opacity-30 hover:brightness-125 h-7 md:h-8 text-xs px-2',
        className,
        isActive && 'opacity-100'
      )}
      {...rest}
    >
      {children}
    </Button>
  );
};
