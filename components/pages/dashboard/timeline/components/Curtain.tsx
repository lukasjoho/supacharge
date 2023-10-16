import { cn } from '@/lib/utils';

interface CurtainProps {
  left?: boolean;
  right?: boolean;
}

const Curtain = ({ left = true, right = false }: CurtainProps) => {
  return (
    <div
      className={cn(
        'absolute left-0 h-full w-32 bg-gradient-to-r from-background/75 to-transparent z-10 pointer-events-none',
        right && 'right-0 bg-gradient-to-l',
        left && 'left-0 bg-gradient-to-r'
      )}
    />
  );
};

export default Curtain;
