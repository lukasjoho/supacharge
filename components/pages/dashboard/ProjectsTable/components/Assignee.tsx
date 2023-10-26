'use client';
import Avatar from '@/components/shared/Avatar';
import { Prisma } from '@prisma/client';

import { Check } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { getUsersByTeam, updateProjectAssignee } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { useSelectedLayoutSegments } from 'next/navigation';
import toast from 'react-hot-toast';

interface AssigneeProps extends React.HTMLAttributes<HTMLDivElement> {
  assignee: Prisma.UserGetPayload<{}>;
  projectId: string;
}

const Assignee = ({ assignee, projectId, ...props }: AssigneeProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(assignee?.id);
  const teamSlug = useSelectedLayoutSegments()[1];
  const { data: users } = useQuery({
    queryKey: ['users', teamSlug],
    queryFn: async () => await getUsersByTeam(teamSlug),
  });

  const handleAvatarClick = (e: any) => {
    e.stopPropagation();
  };

  const handleItemClick = (e: any) => {
    e.stopPropagation();
  };

  const { className, ...rest } = props;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={cn('', className)}
      {...rest}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            aria-expanded={open}
            variant="unstyled"
            className="p-0 h-auto"
            onClick={handleAvatarClick}
          >
            <Avatar
              className="w-7 h-7"
              data={users?.find((user) => user.id === value) || assignee}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search team users..." />
            <CommandEmpty>No user found.</CommandEmpty>
            <CommandGroup>
              {users?.map((user) => (
                <CommandItem
                  onClick={handleItemClick}
                  className="cursor-pointer"
                  key={user.id}
                  onSelect={async () => {
                    setValue(user.id);
                    setOpen(false);
                    const res = await updateProjectAssignee(projectId, user.id);
                    if (res.success) {
                      toast.success('Project assignee updated.');
                    } else {
                      toast.error('Assignee update failed');
                    }
                    return false;
                  }}
                >
                  <Avatar data={user} className="w-5 h-5 mr-2" />

                  {user.name}
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === user.id ? 'opacity-100' : 'opacity-0'
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

export default Assignee;
