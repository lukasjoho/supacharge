'use client';
import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface ScrollAnimationWrapperProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

const ScrollAnimationWrapper = ({
  children,
  ...props
}: ScrollAnimationWrapperProps) => {
  const { className, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    margin: '-200px 0px',
    once: true,
  });
  return (
    <motion.div
      initial={{
        scale: 0.9,
      }}
      animate={{
        scale: inView ? 1 : 0.9,
      }}
      transition={{
        duration: 1.5,
        ease: [0.74, 0, 0.19, 1.02],
      }}
      ref={ref}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
