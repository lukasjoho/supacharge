import ToastDialog from '@/components/shared/ToastDialog';
import { cn } from '@/lib/utils';
import { addDays, differenceInDays, format } from 'date-fns';
import { motion, useMotionValue } from 'framer-motion';
import { memo, useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import {
  getDateFromPosition,
  roundToNearestMultiple,
} from '../../dashboard/timeline/lib/utils';
import { useVariants } from '../Variants/VariantsContext';

const Draggable = ({ project, range, options }: any) => {
  const { experiment, setExperiment } = useVariants();
  const [item, setItem] = useState(project);
  const [hasSelected, setHasSelected] = useState(false);
  let daysStart = differenceInDays(
    new Date(project.startDate!),
    range.rangeStart
  );
  let daysDuration = differenceInDays(
    new Date(project.endDate!),
    new Date(project.startDate!)
  );
  const mX = useMotionValue(daysStart * options?.unitWidth);

  const handleDrag = useCallback((event: any, info: any) => {
    let newX = mX.get() + info.delta.x;
    mX.set(newX);
  }, []);

  const handleDragEnd = useCallback(async () => {
    let newX = roundToNearestMultiple(mX.get(), options?.unitWidth);
    let startDate = getDateFromPosition(newX, range, options?.unitWidth);
    let endDate = addDays(startDate, daysDuration);
    setItem((prevItem: any) => ({
      ...prevItem,
      startDate: startDate,
      endDate: endDate.toISOString(),
    }));

    if (!hasSelected) {
      toast.success(
        (t) => (
          <ToastDialog
            id={t.id}
            title="You scheduled an experiment! 🗓️"
            message="Supacharge provides you with simple and intuitive tools to plan and manage your experiments."
          />
        ),
        {
          duration: 6000,
        }
      );
    } else {
      toast(
        `Updated to ${format(startDate, 'MMM dd')} - ${format(
          endDate,
          'MMM dd'
        )}`
      );
    }
    setHasSelected(true);

    mX.set(newX);
  }, [hasSelected]);
  const shouldBeGreen = project.type === 'real' && experiment.isEnabled;
  const getItemColor = () => {
    if (project.type !== 'real') {
      return 'bg-gradient-to-r from-neutral-700/30 to-neutral-600/30 border-neutral-400/75 opacity-25';
    } else if (experiment.isEnabled) {
      return 'bg-gradient-to-r from-green-600/20 to-green-400/20 border-green-500/75';
    } else {
      return 'bg-gradient-to-r from-neutral-700/30 to-neutral-600/30 border-neutral-400/75';
    }
  };
  const itemColor = getItemColor();
  return (
    <motion.div
      className={cn(
        'text-xs whitespace-nowrap flex items-center border rounded-lg px-3 absolute h-full font-medium overflow-hidden text-ellipsis',
        itemColor,
        project.type === 'real' && 'ccursor-move'
      )}
      drag="x"
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      dragElastic={0}
      dragMomentum={false}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragListener={project.type === 'real'}
      style={{ left: mX, width: daysDuration * options?.unitWidth }}
    >
      {project.name}
    </motion.div>
  );
};

export default memo(Draggable);
