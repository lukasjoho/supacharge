'use client';

import { cn } from '@/lib/utils';
import { useVariants } from './VariantsContext';
import { variants } from './config';

interface HeroWordProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroWord = (props: HeroWordProps) => {
  const { activeVariantId } = useVariants();
  let activeVariant = variants.find((v) => v.id === activeVariantId);
  const { className, ...rest } = props;
  return (
    <div className={cn(className)} style={{ color: activeVariant?.color }}>
      {activeVariant?.word}
    </div>
  );
};

export default HeroWord;
