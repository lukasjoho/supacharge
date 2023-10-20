import Title from '@/components/shared/Title';
import { cn } from '@/lib/utils';
import React from 'react';

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
}

const GridItem = ({ children, title, ...props }: GridItemProps) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        'border rounded-lg relative flex flex-col transition duration-200 hover:bg-muted/30',
        className
      )}
      {...rest}
    >
      <Title
        className="text-center text-lg text-muted-foreground px-4 py-4"
        semi
      >
        {title}
      </Title>
      <div className="grow overflow-hidden flex flex-col">{children}</div>
    </div>
  );
};

export default GridItem;
