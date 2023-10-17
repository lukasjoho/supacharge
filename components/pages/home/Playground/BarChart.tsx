'use client';
import ToastDialog from '@/components/shared/ToastDialog';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import {
  computeWeightForVariants,
  useVariants,
} from '../Variants/VariantsContext';
import { Variant } from '../Variants/config';

const BarChart = () => {
  const { activeVariants } = useVariants();

  const fireToast = () => {
    toast(
      (t) => (
        <ToastDialog
          id={t.id}
          title="Evaluate your results! 📊"
          message="Track and evaluate your experimentation performance using built-in analytics features."
        />
      ),
      {
        duration: 6000,
      }
    );
  };

  return (
    <div
      className="flex flex-col items-start justify-between h-full pb-4"
      onClick={() => fireToast()}
    >
      <div className="space-y-2 w-full">
        <AnimatePresence>
          {computeWeightForVariants(activeVariants).map((variant) => (
            <Bar variant={variant} key={variant.id} />
          ))}
        </AnimatePresence>
      </div>
      <p className="text-muted-foreground text-xs text-center w-full">
        Conversion rate %
      </p>
    </div>
  );
};

export default BarChart;

interface BarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: Variant;
}

const Bar = ({ variant, ...props }: BarProps) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        'w-full relative flex items-center text-2xs gap-3',
        className
      )}
      {...rest}
    >
      <motion.div
        className="h-6 border rounded-r-md border-l-0 flex items-center whitespace-nowrap overflow-hidden"
        style={{
          borderColor: variant.color,
          backgroundColor: `${variant.color}50`,
        }}
        initial={{
          width: 0,
        }}
        animate={{
          width: `${variant.metric * 100}%`,
        }}
        exit={{
          width: 0,
        }}
        key={variant.id}
      >
        Variant {variant.id.toUpperCase()}
      </motion.div>
      <motion.div
        key={variant.id}
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        exit={{
          scale: 0,
        }}
      >
        {variant.metric * 100}%
      </motion.div>
    </div>
  );
};
