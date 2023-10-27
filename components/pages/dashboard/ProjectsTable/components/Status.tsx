import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { updateProject } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { Status as StatusType } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { Check } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface StatusProps {
  status: StatusType;
  projectId: string;
}

const statusesList = {
  DRAFT: 'DRAFT',
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
};

const Status = ({ status, projectId }: StatusProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(status);
  const { data: statuses }: { data: StatusType[] | undefined } = useQuery({
    queryKey: ['statuses'],
    queryFn: async () => {
      return new Promise((resolve) => {
        resolve(Object.values(statusesList));
      });
    },
  });

  return (
    <div onClick={(e) => e.stopPropagation()} className="inline-block">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            aria-expanded={open}
            variant="unstyled"
            className="p-0 h-auto"
          >
            <StatusBadge
              status={statuses?.find((status) => status === value) || status}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[160px] p-0">
          <Command>
            <CommandGroup>
              {statuses?.map((status) => (
                <CommandItem
                  className="cursor-pointer"
                  key={status}
                  onSelect={async () => {
                    setValue(status);
                    setOpen(false);
                    const res = await updateProject(projectId, {
                      status: status,
                    });
                    if (res.success) {
                      toast.success(res.message);
                    } else {
                      toast.error(res.message);
                    }
                    return false;
                  }}
                >
                  <StatusBadge status={status} />
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === status ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

interface StatusBadgeProps {
  status: StatusType;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  function getColor(status: StatusType) {
    switch (status) {
      case 'ACTIVE':
        return 'green-500';
      case 'INACTIVE':
        return 'gray-500';
      case 'DRAFT':
        return 'yellow-500';
    }
  }
  const color = getColor(status);
  return (
    <div className={cn('flex gap-1.5 items-center', `text-${color}`)}>
      <div className={cn('aspect-square w-2 rounded-full', `bg-${color}`)} />
      {status}
    </div>
  );
};

export default Status;
