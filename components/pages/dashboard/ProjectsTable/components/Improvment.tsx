import { cn } from '@/lib/utils';

interface ImprovementProps {
  improvement: number;
}

const Improvement = ({ improvement }: ImprovementProps) => {
  return (
    <div
      className={cn(
        'font-semibold',
        improvement > 0 && 'text-green-500',
        improvement < 0 && 'text-red-500'
      )}
    >
      {improvement ? `${improvement > 0 ? '+' : ''}${improvement}%` : '-'}
    </div>
  );
};

export default Improvement;
