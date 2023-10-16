import { cn } from '@/lib/utils';

interface StatusProps {
  status: boolean;
}

const Status = ({ status }: StatusProps) => {
  return (
    <div
      className={cn(
        'flex gap-1.5 items-center',
        status ? 'text-green-500' : 'text-gray-500'
      )}
    >
      <div
        className={cn(
          'aspect-square w-2 rounded-full',
          status ? 'bg-green-500' : 'bg-gray-500'
        )}
      />
      {status ? 'Active' : 'Inactive'}
    </div>
  );
};

export default Status;
