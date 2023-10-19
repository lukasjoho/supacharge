'use client';
import ToastDialog from '@/components/shared/ToastDialog';
import { Switch } from '@/components/ui/switch';
import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useVariants } from '../Variants/VariantsContext';

const Remote = () => {
  const { experiment, setExperiment } = useVariants();
  const [hasSelected, setHasSelected] = useState(false);
  const handleChange = (isEnabled: boolean) => {
    setExperiment({
      ...experiment,
      isEnabled: isEnabled,
    });
    if (!hasSelected) {
      toast.success(
        (t) => (
          <ToastDialog
            id={t.id}
            title="You controlled a featureflag! 🚀"
            message="Supacharge gives you full-control over your experiment launch using featue flags."
          />
        ),
        {
          duration: 6000,
        }
      );
    } else {
      toast(`Featureflag updated`);
    }
    setHasSelected(true);
  };

  return (
    <div className="grow grid place-items-center">
      <div className="-translate-y-4 scale-[200%]">
        <motion.div
          whileTap={{
            scale: 0.9,
          }}
        >
          <Switch
            className="ccursor-click"
            checked={experiment.isEnabled}
            onCheckedChange={handleChange}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Remote;
