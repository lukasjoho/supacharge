'use client';
import { Switch } from '@/components/ui/switch';
import { useVariants } from '../Variants/VariantsContext';

const Remote = () => {
  const { experiment, setExperiment } = useVariants();
  const handleChange = (isEnabled: boolean) => {
    setExperiment({
      ...experiment,
      isEnabled: isEnabled,
    });
  };

  return (
    <div className="grow grid place-items-center">
      {/* <pre>{JSON.stringify(experiment, null, 2)}</pre> */}
      <Switch
        className="-translate-y-4 scale-[200%]"
        checked={experiment.isEnabled}
        onCheckedChange={handleChange}
      />
    </div>
  );
};

export default Remote;
