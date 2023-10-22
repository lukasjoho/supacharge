import { cn } from '@/lib/utils';
import React, { ElementType, FC, HTMLAttributes } from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  semi?: boolean;
}

const HeadingTag: FC<{
  as: ElementType<HTMLAttributes<HTMLHeadingElement>>;
  semi: boolean;
  props: HTMLAttributes<HTMLHeadingElement>;
}> = ({ as: Component, props, semi }) => (
  <Component
    {...props}
    className={cn(
      'text-2xl leading-tight tracking-[-0.025em] font-bold',
      props.className,
      semi && 'font-semibold'
    )}
  />
);

const Title: FC<TitleProps> = ({
  children,
  as = 'h1',
  semi = false,
  ...props
}) => {
  return <HeadingTag as={as} props={{ children, ...props }} semi={semi} />;
};

export default Title;
