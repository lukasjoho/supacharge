'use client';

import { useInView } from 'framer-motion';
import Image from 'next/image';
import { FC, useContext, useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import Container from '@/components/layout/Container';
import Title from '../Title';
import { WalkthroughContext } from './WalkthroughProvider';

type TWalkthroughItem = {
  label: string;
  title: React.ReactNode;
  description: string;
  cta: string;
  imageUrl: string;
  color: string;
  step: number;
  solidColor: string;
  highlights?: any[];
};

interface WalkthroughItemProps {
  item: TWalkthroughItem;
  orientation: 'left' | 'right';
  [x: string]: any;
}

const WalkthroughItem: FC<WalkthroughItemProps> = ({
  item,
  orientation,
  ...props
}) => {
  const {
    label,
    title,
    description,
    cta,
    imageUrl,
    color,
    solidColor,
    step,
  }: TWalkthroughItem = item;
  const ref = useRef(null);
  const { setActiveStep } = useContext(WalkthroughContext);
  const isInView = useInView(ref, { once: false, margin: '-250px 0px' });
  useEffect(() => {
    if (isInView) {
      setActiveStep(step);
    }
  }, [isInView]);
  return (
    <section id={label} {...props} ref={ref}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div
            className={cn(
              'space-y-8',
              orientation == 'right' ? 'order-last' : 'order-first'
            )}
          >
            <div className="space-y-6 md:w-3/4">
              <div className="space-y-2">
                <p
                  className={cn(
                    'font-bold text-lg bg-gradient-to-t bg-clip-text text-transparent',
                    color
                  )}
                >
                  {label}
                </p>
                <Title className="text-2xl">{title}</Title>
              </div>
              <div className="md:hidden">
                <ItemImage imageUrl={imageUrl} />
              </div>
              <p>{description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {item.highlights?.map((highlight: any, index) => (
                <div className="flex gap-2 items-center" key={index}>
                  <div className={`text-${solidColor}`}>{highlight.icon}</div>
                  <p className="whitespace-nowrap">{highlight.label}</p>
                </div>
              ))}
            </div>
            <Button>{cta}</Button>
          </div>
          <div className="hidden md:block">
            <ItemImage imageUrl={imageUrl} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WalkthroughItem;

interface ItemImageProps {
  imageUrl: string;
}
const ItemImage: FC<ItemImageProps> = ({ imageUrl }) => {
  return (
    <div className="aspect-video relative rounded-lg overflow-hidden border">
      <Image
        src={imageUrl}
        alt="i"
        fill={true}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};
