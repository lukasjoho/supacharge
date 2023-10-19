'use client';
import ToastDialog from '@/components/shared/ToastDialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { memo, useState } from 'react';
import toast from 'react-hot-toast';
import { experiment } from '../Variants/config';

const DecisionMaker = () => {
  return (
    <div className="text-sm flex flex-col items-center w-full h-full pb-6">
      <div className="grow  grid place-items-center">
        <Decision decision={experiment.decision} />
        {/* <Button disabled className="flex gap-1.5 items-center">
          <Icons.slack className="w-4 h-4" />
          Share
        </Button> */}
      </div>
    </div>
  );
};

interface DecisionProps {
  decision: string;
}

const decisionsList = {
  REJECT: 'REJECT',
  ACCEPT: 'ACCEPT',
  ITERATE: 'ITERATE',
  NONE: 'NONE',
};

const Decision = ({ decision }: DecisionProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(decision);
  const [hasSelected, setHasSelected] = useState(false);
  const decisions = Object.values(decisionsList);

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            aria-expanded={open}
            variant="unstyled"
            className="p-0"
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
            <CommandGroup>
              {decisions?.map((decision) => (
                <CommandItem
                  className="ccursor-click"
                  key={decision}
                  onSelect={async () => {
                    setValue(decision);
                    if (!hasSelected) {
                      toast.success(
                        (t) => (
                          <ToastDialog
                            id={t.id}
                            title="You recorded a decision! 🔒"
                            message="Supacharge intelligently keeps track of your decisions and associated data and helps in formulating new experiments."
                          />
                        ),
                        {
                          duration: 6000,
                        }
                      );
                    } else {
                      toast(`Decision updated to ${decision}`);
                    }
                    setHasSelected(true);
                    setOpen(false);
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
  decision: string;
}

const DecisionBadge = ({ decision }: DecisionBadgeProps) => {
  return (
    <motion.div
      whileTap={{
        scale: 0.95,
      }}
    >
      <Badge
        className={cn(
          'ccursor-click text-foreground text-base px-4 py-1',
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
        {decision === 'NONE' ? 'PENDING' : decision}
      </Badge>
    </motion.div>
  );
};

export default memo(DecisionMaker);
