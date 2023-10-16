'use client';
import { differenceInDays } from 'date-fns';
import React, { useEffect, useRef } from 'react';
import SETTINGS from '../lib/constants';
import { Range } from '../lib/types';
import Curtain from './Curtain';

interface ScrollWrapperProps {
  children: React.ReactNode;
  range: Range;
}

const ScrollWrapper = ({ children, range }: ScrollWrapperProps) => {
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  let days = differenceInDays(new Date(), range.rangeStart);

  useEffect(() => {
    if (timelineContainerRef.current)
      scrollTo(timelineContainerRef.current, days);
  }, [timelineContainerRef]);
  return (
    <div className="relative border rounded-lg overflow-hidden w-full">
      <div className="overflow-scroll scroll-smooth" ref={timelineContainerRef}>
        <Curtain left />
        <Curtain right />
        {children}
      </div>
    </div>
  );
};

function scrollTo(element: HTMLDivElement, days: number) {
  let elWidth = element.getBoundingClientRect().width;
  element.scrollLeft = SETTINGS.UNIT_WIDTH * days - elWidth / 3;
}

export default ScrollWrapper;
