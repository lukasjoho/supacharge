import { cn } from '@/lib/utils';
import { Prisma } from '@prisma/client';
import { addDays, differenceInDays, isWithinInterval } from 'date-fns';
import { motion, useMotionValue } from 'framer-motion';
import { forwardRef, memo, useCallback } from 'react';
import SETTINGS from '../lib/constants';
import { Range } from '../lib/types';
import { getDateFromPosition, roundToNearestMultiple } from '../lib/utils';

interface DragItemProps {
  item: Prisma.ProjectGetPayload<{}>;
  updateItem: (id: string, data: any) => Promise<void>;
  range: Range;
}

const DragItem = forwardRef<HTMLDivElement, DragItemProps>((props, ref) => {
  const { item, updateItem, range } = props;
  const { id, name } = item;

  const isActive = isWithinInterval(
    new Date(new Date().setHours(12, 0, 0, 0)),
    {
      start: new Date(item.startDate!),
      end: new Date(item.endDate!),
    }
  );

  let daysStart = differenceInDays(new Date(item.startDate!), range.rangeStart);
  let daysDuration = differenceInDays(
    new Date(item.endDate!),
    new Date(item.startDate!)
  );
  const mX = useMotionValue(daysStart * SETTINGS.UNIT_WIDTH);

  const handleDrag = useCallback(
    (event: any, info: any) => {
      let newX = mX.get() + info.delta.x;
      mX.set(newX);
    },
    [id, mX]
  );

  const handleDragEnd = useCallback(async () => {
    let newX = roundToNearestMultiple(mX.get());
    let date = getDateFromPosition(newX, range);
    await updateItem(id, {
      //temporary workaround to avoid timezone issues
      startDate: new Date(date.setHours(12, 0, 0, 0)).toISOString(),
      endDate: addDays(
        new Date(date.setHours(12, 0, 0, 0)),
        daysDuration
      ).toISOString(),
    });
    mX.set(newX);
  }, [id, mX, daysDuration, range.rangeStart, name, updateItem]);

  return (
    <motion.div
      style={{ left: mX, width: daysDuration * SETTINGS.UNIT_WIDTH }}
      key={id}
      ref={ref}
      className={cn(
        'border-2 border-neutral-400/75 bg-gradient-to-r from-neutral-700/30 to-neutral-600/30 rounded-lg px-4 h-12 absolute flex items-center font-medium whitespace-nowrap',
        isActive && 'border-green-500/75 from-green-600/20 to-green-400/20'
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
