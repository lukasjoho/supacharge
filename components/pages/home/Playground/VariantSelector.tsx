'use client';
import { PlusCircle, X } from 'lucide-react';

import ToastDialog from '@/components/shared/ToastDialog';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  computeWeightForVariants,
  useVariants,
} from '../Variants/VariantsContext';
import { VariantWithWeight, variants } from '../Variants/config';

const VariantSelector = ({ name }: any) => {
  const { activeVariants, setActiveVariants } = useVariants();
  const [hasSelected, setHasSelected] = useState(false);

  const handleAdd = () => {
    setActiveVariants([...activeVariants, variants[activeVariants.length]]);
    if (!hasSelected) {
      toast(
        (t) => (
          <ToastDialog
            id={t.id}
            title="You adjusted traffic allocation! 🔒"
            message="With Supacharge you decide how you want to split your traffic and roll out experiments using feature flags."
          />
        ),
        {
          duration: 6000,
        }
      );
    } else {
      toast(`Variants updated`);
    }
    setHasSelected(true);
  };

  const handleRemove = () => {
    setActiveVariants(activeVariants.slice(0, -1));
    if (!hasSelected) {
      toast(
        (t) => (
          <ToastDialog
            id={t.id}
            title="You adjusted variants! 🚥"
            message="With Supacharge you decide how you want to split your traffic and roll out experiments using variants."
          />
        ),
        {
          duration: 6000,
        }
      );
    } else {
      toast(`Variants updated`);
    }
    setHasSelected(true);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-4 py-3">
      <AnimatePresence mode="popLayout">
        {computeWeightForVariants(activeVariants).map(
          (variant: VariantWithWeight, idx: number) => {
            let isLast = idx === activeVariants.length - 1;
            return (
              <motion.div
                className="w-full"
                key={variant.id}
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                }}
                layoutId={`variant-${variant.id}`}
              >
                <VariantTag
                  variant={variant}
                  handleRemove={handleRemove}
                  key={variant.id}
                  idx={idx}
                  isLast={isLast}
                />
              </motion.div>
            );
          }
        )}
      </AnimatePresence>
      {activeVariants.length < 4 && (
        <motion.button
          key={'button'}
          layoutId={`button`}
          onClick={handleAdd}
          className="group w-full aspect-square border rounded-lg bg-neutral-500/10 border-neutral-500 grid place-items-center"
          whileTap={{
            scale: 0.95,
          }}
        >
          <PlusCircle className="transition duration-100 text-neutral-100 opacity-70 group-hover:opacity-100" />
        </motion.button>
      )}
    </div>
  );
};

export default VariantSelector;

interface VariantTagProps {
  variant: VariantWithWeight;
  idx: number;
  handleRemove: () => void;
  isLast: boolean;
}

const VariantTag = ({
  variant,
  idx,
  isLast,
  handleRemove,
}: VariantTagProps) => {
  const { id, weight } = variant;
  return (
    <div className="relative w-full cursor-default">
      <div
        className="aspect-square text-lg font-medium text-center grid place-items-center border rounded-lg w-full"
        style={{
          borderColor: variant.color,
          backgroundColor: `${variant.color}50`,
        }}
      >
        {String(id)[0].toUpperCase()}
        <div className="text-center md:hidden text-xs">{weight * 100}%</div>
      </div>
      <div className="text-center hidden md:block mt-2 text-sm">
        {weight * 100}%
      </div>
      {isLast && idx != 0 && (
        <div
          className="aspect-square rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-6 grid place-items-center cursor-pointer z-10 text-sm border bg-foreground"
          onClick={() => handleRemove()}
        >
          <X className="w-4 h-4 text-background" />
        </div>
      )}
    </div>
  );
};
