'use client';
import { cn } from '@/lib/utils';
import { differenceInDays } from 'date-fns';
import React, { useEffect, useRef } from 'react';
import SETTINGS from '../lib/constants';
import { TimelineOptions } from '../lib/options';
import { Range } from '../lib/types';

interface ScrollWrapperProps {
  children: React.ReactNode;
  range: Range;
  options?: TimelineOptions;
  mini?: boolean;
}

const ScrollWrapper = ({
  children,
  mini = false,
  options,
  range,
}: ScrollWrapperProps) => {
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  let days = differenceInDays(new Date(), range.rangeStart);

  useEffect(() => {
    if (timelineContainerRef.current)
      scrollTo(timelineContainerRef.current, days, options);
  }, [timelineContainerRef]);
  return (
    <div
      className={cn(
        'relative  overflow-hidden w-full grow flex flex-col border-t',
        !mini && 'border rounded-lg'
      )}
    >
      <div
        className="overflow-scroll scroll-smooth flex flex-col grow"
        ref={timelineContainerRef}
      >
        {/* <Curtain left />
        <Curtain right /> */}
        {children}
      </div>
    </div>
  );
};

function scrollTo(
  element: HTMLDivElement,
  days: number,
  options?: TimelineOptions
) {
  let unitWidth = options?.unitWidth || SETTINGS.UNIT_WIDTH;
  let elWidth = element.getBoundingClientRect().width;
  element.scrollLeft = unitWidth * days - elWidth / 2;
}

export default ScrollWrapper;
