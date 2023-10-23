import { cn } from '@/lib/utils';
import { Prisma } from '@prisma/client';
import {
  addDays,
  differenceInDays,
  isWithinInterval,
  startOfDay,
} from 'date-fns';
import { motion, useMotionValue } from 'framer-motion';
import { forwardRef, memo, useCallback } from 'react';
import SETTINGS from '../lib/constants';
import { Range } from '../lib/types';
import { getDateFromPosition, roundToNearestMultiple } from '../lib/utils';
import DragHandle from './DragHandle';

interface DragItemProps {
  item: Prisma.ProjectGetPayload<{}>;
  updateItem: (id: string, data: any) => Promise<void>;
  range: Range;
}

const DragItem = forwardRef<HTMLDivElement, DragItemProps>((props, ref) => {
  const { item, updateItem, range } = props;
  const { id, name } = item;

  const isActive = isWithinInterval(startOfDay(new Date()), {
    start: startOfDay(new Date(item.startDate!)),
    end: startOfDay(new Date(item.endDate!)),
  });

  const colorClassNames = isActive
    ? {
        item: 'border-green-500/75 from-green-600/20 to-green-400/20',
        handle: 'bg-green-500/75',
      }
    : {
        item: 'border-neutral-400/75 from-neutral-700/30 to-neutral-600/30',
        handle: 'bg-neutral-400/75',
      };

  let daysStart = differenceInDays(
    startOfDay(new Date(item.startDate!)),
    startOfDay(range.rangeStart)
  );
  let daysDuration = differenceInDays(
    new Date(item.endDate!),
    new Date(item.startDate!)
  );
  const mX = useMotionValue(daysStart * SETTINGS.UNIT_WIDTH);
  const mWidth = useMotionValue(daysDuration * SETTINGS.UNIT_WIDTH);

  const handleDrag = useCallback(
    (event: any, info: any, position: 'left' | 'center' | 'right') => {
      if (position === 'left') {
        let newWidth = mWidth.get() - info.delta.x;
        let newX = mX.get() + info.delta.x;
        mX.set(newX);
        mWidth.set(newWidth);
      }
      if (position === 'right') {
        let newWidth = mWidth.get() + info.delta.x;
        mWidth.set(newWidth);
      }
      if (position === 'center') {
        let newX = mX.get() + info.delta.x;
        mX.set(newX);
      }
    },
    [id, mX, mWidth]
  );

  const handleDragEnd = useCallback(async () => {
    let newX = roundToNearestMultiple(mX.get());
    let newWidth = roundToNearestMultiple(mWidth.get());
    let date = getDateFromPosition(newX, range);
    let newDaysDuration = newWidth / SETTINGS.UNIT_WIDTH;

    await updateItem(id, {
      //temporary workaround to avoid timezone issues
      startDate: date,
      endDate: addDays(date, newDaysDuration).toISOString(),
    });
    mX.set(newX);
    mWidth.set(newWidth);
  }, [id, mX, daysDuration, range.rangeStart, name, updateItem]);
  return (
    <motion.div
      style={{ left: mX, width: mWidth }}
      key={id}
      ref={ref}
      className={cn(
        'border-2 border-neutral-400/75 bg-gradient-to-r from-neutral-700/30 to-neutral-600/30 rounded-lg px-4 h-12 absolute flex items-center font-medium whitespace-nowrap overflow-hidden',
        colorClassNames.item
      )}
      onDrag={(event, info) => handleDrag(event, info, 'center')}
      onDragEnd={handleDragEnd}
      drag="x"
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0}
      dragMomentum={false}
      layoutId={id}
    >
      <DragHandle
        left
        handleDrag={handleDrag}
        handleDragEnd={handleDragEnd}
        colorClassNames={colorClassNames.handle}
      />
      <DragHandle
        right
        handleDrag={handleDrag}
        handleDragEnd={handleDragEnd}
        colorClassNames={colorClassNames.handle}
      />
      {name}
    </motion.div>
  );
});

export default memo(DragItem);

DragItem.displayName = 'DragItem';
