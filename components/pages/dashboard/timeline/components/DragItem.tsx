import { cn } from '@/lib/utils';
import { Prisma } from '@prisma/client';
import { addDays, differenceInDays } from 'date-fns';
import { motion, useMotionValue } from 'framer-motion';
import { forwardRef, memo, useCallback } from 'react';
import toast from 'react-hot-toast';
import SETTINGS from '../lib/constants';
import { roundToNearestMultiple } from '../lib/utils';
//extends HTMLMotionProps<"div">
interface DragItemProps {
  item: Prisma.ProjectGetPayload<{}>;
  updateItem: (id: string, data: any) => Promise<void>;
  x: number;
  rangeStart: string;
}

const DragItem = forwardRef<HTMLDivElement, DragItemProps>((props, ref) => {
  const { item, updateItem, rangeStart } = props;
  const { id, name } = item;

  if (item.name === 'clnrnlyfr0000mj8hf3y30d1h') {
    console.log('DATE: ', item.name, item.startDate);
  }

  let daysStart = differenceInDays(
    new Date(item.startDate!),
    new Date(rangeStart)
  );
  let daysDuration = differenceInDays(
    new Date(item.endDate!),
    new Date(item.startDate!)
  );
  let init = daysStart * SETTINGS.UNIT_WIDTH;
  const mX = useMotionValue(init);

  function getDateFromPosition(position: number) {
    const days = position / SETTINGS.UNIT_WIDTH;
    const date = new Date(rangeStart);
    return addDays(date, days);
  }

  const handleDrag = useCallback(
    (event: any, info: any) => {
      let newX = mX.get() + info.delta.x;
      mX.set(newX);
      let date = getDateFromPosition(newX);
      console.log('DATE: ', date.toDateString());
    },
    [id, mX]
  );

  const handleDragEnd = useCallback(async () => {
    let newX = roundToNearestMultiple(mX.get());
    let date = getDateFromPosition(newX);
    await updateItem(id, {
      startDate: date.toISOString(),
      endDate: addDays(date, daysDuration).toISOString(),
    });
    toast.success(`Moved ${name} to ${date.toDateString()}`);
    mX.set(newX);
  }, [id, mX, daysDuration, rangeStart, name, updateItem]);

  return (
    <motion.div
      style={{ left: mX, width: daysDuration * SETTINGS.UNIT_WIDTH }}
      id={id}
      key={id}
      ref={ref}
      className={cn(
        'border-2 border-neutral-500 bg-neutral-500/20 rounded-lg px-4 h-12 absolute flex items-center font-medium'
      )}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      drag="x"
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0}
      dragMomentum={false}
      layoutId={id}
    >
      {name}
    </motion.div>
  );
});

export default memo(DragItem);

DragItem.displayName = 'DragItem';
