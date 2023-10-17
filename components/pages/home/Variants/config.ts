import colors from '@/resolveConfig';
import { Decision } from '@prisma/client';
import { addDays, subDays } from 'date-fns';

export type Variant = {
  id: string;
  word: string;
  color: string;
  metric: number;
};

export type VariantWithWeight = Variant & {
  weight: number;
};

export const variants: Variant[] = [
  {
    id: 'a',
    word: 'relentlessly',
    color: colors['violet'][500],
    metric: 0.52,
  },
  {
    id: 'b',
    word: 'transparently',
    color: colors['purple'][500],
    metric: 0.64,
  },
  {
    id: 'c',
    word: 'analytically',
    color: colors['fuchsia'][500],
    metric: 0.43,
  },
  {
    id: 'd',
    word: 'collaboratively',
    color: colors['pink'][500],
    metric: 0.23,
  },
];

export type Experiment = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  isEnabled: boolean;
  decision: Decision;
  variants: ExperimentVariant[];
};

export type ExperimentVariant = Omit<
  VariantWithWeight,
  'color' | 'metric' | 'word' | 'decision'
>;

export const experiment = {
  id: 'exp-hero-wording',
  name: 'Landing Page Hero Title',
  startDate: '2023-10-10',
  endDate: '2023-10-31',
  isEnabled: true,
  decision: 'NONE',
};

export function generateExperiment(today: Date) {
  return {
    id: 'exp-hero-wording',
    name: 'Landing Page Hero Title',
    startDate: subDays(today, -4).toISOString(),
    endDate: addDays(today, 11).toISOString(),
    isEnabled: true,
    decision: 'NONE',
  };
}
