import colors from '@/resolveConfig';
import { PlusCircle, X } from 'lucide-react';

export type Variant = {
  id: string;
  weight: number;
};

interface VariantSelectProps {
  value: Variant[];
  setValue: any;
}

const variantColors = [
  colors['sky'][500],
  colors['indigo'][500],
  colors['purple'][500],
  colors['pink'][500],
];

const VariantSelect = ({ value, setValue }: VariantSelectProps) => {
  function addVariant() {
    const newWeight = (1 / (value.length + 1)).toFixed(4);
    const newVariant = {
      id: String.fromCharCode(96 + value.length + 1),
      weight: newWeight,
    };
    const updatedVariants = [...value, newVariant].map((v) => ({
      ...v,
      weight: Number(newWeight),
    }));
    setValue('variants', [...updatedVariants]);
  }

  function removeVariant() {
    const newWeight = (1 / (value.length - 1)).toFixed(4);
    const updatedVariants = [...value].slice(0, -1).map((v) => ({
      ...v,
      weight: Number(newWeight),
    }));
    setValue('variants', [...updatedVariants]);
  }

  return (
    <div>
      <div className="flex gap-1">
        {value.map((variant, idx) => {
          return (
            <VariantTag
              key={variant.id}
              variant={variant}
              idx={idx}
              isLast={value.length === idx + 1}
              removeVariant={removeVariant}
            />
          );
        })}
        {value.length < 4 && (
          <div
            className="border group transition duration-150 border-muted hover:border-primary aspect-square w-20 text-center grid place-items-center rounded-md cursor-pointer "
            onClick={addVariant}
          >
            <PlusCircle className="opacity-50 group-hover:opacity-100" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VariantSelect;

interface VariantTagProps {
  variant: Variant;
  idx: number;
  isLast: boolean;
  removeVariant: () => void;
}

const VariantTag = ({
  variant,
  idx,
  isLast,
  removeVariant,
}: VariantTagProps) => {
  return (
    <div
      className="border aspect-square w-20 text-center grid place-items-center rounded-md relative"
      style={{
        backgroundColor: `${variantColors[idx]}50`,
        borderColor: variantColors[idx],
      }}
    >
      <div className="font-medium">
        <div>{variant.id.toUpperCase()}</div>
        <div>{variant.weight * 100}%</div>
      </div>
      {isLast && idx != 0 && (
        <div
          className="absolute top-0 right-0 grid place-items-center aspect-square w-5 bg-primary text-secondary rounded-full translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={removeVariant}
        >
          <X className="w-3/4 h-3/4" />
        </div>
      )}
    </div>
  );
};

export function computeWeightForVariants(
  variants: Variant[]
): (Variant & { weight: number })[] {
  const weight = 1 / variants.length;
  return variants.map((variant) => ({
    ...variant,
    weight: Number(weight.toFixed(4)),
  }));
}
