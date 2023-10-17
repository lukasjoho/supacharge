'use client';

import { cn } from '@/lib/utils';
import { useVariants } from './VariantsContext';
import { variants } from './config';

const HeroWord = () => {
  const { activeVariantId } = useVariants();
  let activeVariant = variants.find((v) => v.id === activeVariantId);
  return (
    <span className={cn()} style={{ color: activeVariant?.color }}>
      {activeVariant?.word}
    </span>
  );
};

export default HeroWord;
