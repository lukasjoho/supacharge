import { cn } from '@/lib/utils';

interface StatusProps {
  status: boolean;
}

const Status = ({ status }: StatusProps) => {
  return (
    <div className={cn(status ? 'bg-green-500' : 'bg-gray-500')}>
      <div
        className={cn(
          'aspect-square w-4 rounded-full',
          status ? 'bg-green-500' : 'bg-gray-500'
        )}
      />
      {status ? 'Active' : 'Inactive'}
    </div>
  );
};

export default Status;
