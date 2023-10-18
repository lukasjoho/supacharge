'use client';
import { cn } from '@/lib/utils';
import { FC, useContext } from 'react';
import { WalkthroughContext } from './WalkthroughProvider';
import { WalkthroughItem } from './types';

interface WalkthroughNavItemProps {
  item: WalkthroughItem;
}

const WalkthroughNavItem: FC<WalkthroughNavItemProps> = ({ item }) => {
  const { icon, label, solidColor }: WalkthroughItem = item;
  const { activeStep } = useContext(WalkthroughContext);
  const isActive = activeStep === item.step;
  return (
    <div
      className={cn(
        'rounded-lg p-[2px] bg-border',
        isActive && `bg-gradient-to-t ${item.color}`
      )}
    >
      <div
        className={cn(
          'bg-background rounded-md py-2 md:py-3 px-3 md:px-4 text-base md:text-lg font-semibold md:font-bold text-muted-foreground'
        )}
      >
        <div
          className={cn(
            'flex items-center gap-2 ',
            isActive && `text-${solidColor}`
          )}
        >
          {icon}
          <div
            className={cn(
              '',
              isActive &&
                `bg-gradient-to-t bg-clip-text text-transparent ${item.color}`
            )}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalkthroughNavItem;
