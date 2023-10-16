'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import Avatar from '@/components/shared/Avatar';
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
import { getTeamsByUser } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSelectedLayoutSegments } from 'next/navigation';

const TeamSelector = () => {
  const [open, setOpen] = React.useState(false);
  const teamSlug = useSelectedLayoutSegments()[1];
  const [value, setValue] = React.useState(teamSlug);

  const { data: teams } = useQuery({
    queryKey: ['teams', teamSlug],
    queryFn: async () => await getTeamsByUser(),
  });

  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-start"
        >
          <Avatar
            data={teams?.find((team) => team.slug === value)}
            className="w-5 h-5 mr-2"
            type="team"
          />
          {teams?.find((team) => team.slug === value)?.name}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search teams..." />
          <CommandEmpty>No team found.</CommandEmpty>
          <CommandGroup>
            {teams?.map((team) => (
              <CommandItem
                className="cursor-pointer"
                key={team.id}
                onSelect={async () => {
                  setValue(team.slug);
                  router.push(`/team/${team.slug}/dashboard`);
                  setOpen(false);
                }}
              >
                <Avatar data={team} className="w-5 h-5 mr-2" type="team" />

                {team.name}
                <Check
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === team.slug ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default TeamSelector;
