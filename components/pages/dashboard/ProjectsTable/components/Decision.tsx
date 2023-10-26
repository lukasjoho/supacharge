'use client';
import { Badge } from '@/components/ui/badge';
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
import { updateProjectDecision } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { Decision as DecisionType } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { Check } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface DecisionProps {
  decision: DecisionType;
  projectId: string;
}

const decisionsList = {
  REJECT: 'REJECT',
  ACCEPT: 'ACCEPT',
  ITERATE: 'ITERATE',
  NONE: 'NONE',
};

const Decision = ({ decision, projectId }: DecisionProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(decision);
  const { data: decisions }: { data: DecisionType[] | undefined } = useQuery({
    queryKey: ['decisions'],
    queryFn: async () => {
      return new Promise((resolve) => {
        resolve(Object.values(decisionsList));
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
            <DecisionBadge
              decision={
                decisions?.find((decision) => decision === value) || decision
              }
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search team users..." />
            <CommandEmpty>No decisions found.</CommandEmpty>
            <CommandGroup>
              {decisions?.map((decision) => (
                <CommandItem
                  className="cursor-pointer"
                  key={decision}
                  onSelect={async () => {
                    setValue(decision);
                    setOpen(false);
                    const res = await updateProjectDecision(
                      projectId,
                      decision
                    );
                    if (res.success) {
                      toast.success(res.message);
                    } else {
                      toast.error(res.message);
                    }
                    return false;
                  }}
                >
                  <DecisionBadge decision={decision} />
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      value === decision ? 'opacity-100' : 'opacity-0'
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

interface DecisionBadgeProps {
  decision: DecisionType;
}

const DecisionBadge = ({ decision }: DecisionBadgeProps) => {
  return (
    <Badge
      className={cn(
        'cursor-pointer text-foreground',
        decision === 'NONE' &&
          'px-4 border-neutral-400/40 bg-neutral-400/5 hover:bg-neutral-400/10',
        decision === 'REJECT' &&
          'border-red-500 bg-red-500/20 text-red-500 hover:bg-red-500/30',
        decision === 'ACCEPT' &&
          'border-green-500 bg-green-500/20 text-green-500 hover:bg-green-500/30',
        decision === 'ITERATE' &&
          'border-yellow-500 bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30'
      )}
    >
      {decision === 'NONE' ? 'NONE' : decision}
    </Badge>
  );
};

export default Decision;
