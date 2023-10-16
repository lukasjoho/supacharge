import { cn } from '@/lib/utils';

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ModalFooter({ children, ...props }: ModalFooterProps) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        'sticky bottom-0 -mt-4 w-full bg-background p-4 md:-mt-6 md:p-6',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

// -mt-4 md:-mt-6
