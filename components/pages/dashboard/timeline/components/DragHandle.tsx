import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'framer-motion';

interface DragHandleProps extends HTMLMotionProps<'div'> {
  left?: boolean;
  right?: boolean;
  handleDrag: (
    event: any,
    info: any,
    position: 'left' | 'center' | 'right'
  ) => void;
  handleDragEnd: (event: any, info: any) => void;
  colorClassNames: string;
}

const DragHandle = ({
  left = false,
  right = false,
  handleDrag,
  handleDragEnd,
  colorClassNames,
}: DragHandleProps) => {
  return (
    <motion.div
      className={cn(
        'w-4 h-full absolute transition duration-150 opacity-0 hover:opacity-100 cursor-col-resize',
        left && 'left-0',
        right && 'right-0',
        colorClassNames
      )}
      onDrag={(event, info) => handleDrag(event, info, left ? 'left' : 'right')}
      drag="x"
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
    />
  );
};

export default DragHandle;
