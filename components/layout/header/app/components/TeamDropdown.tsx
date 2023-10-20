'use client';

import Avatar from '@/components/shared/Avatar';
import CreateTeamButton from '@/components/shared/CreateTeam/CreateTeamButton';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getTeamsByUser } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter, useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useState } from 'react';

const TeamDropdown = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const teamSlug = useSelectedLayoutSegments()[1];
  const { data: teams } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => await getTeamsByUser(),
    enabled: !!teamSlug,
  });

  const { data: session } = useSession();

  useEffect(() => {
    if (teamSlug) {
      queryClient.invalidateQueries(['teams']);
    }
  }, [teamSlug, queryClient, session]);
  const router = useRouter();
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-start">
          <Avatar
            data={teams?.find((team) => team.slug === teamSlug)}
            className="w-5 h-5 mr-2"
            type="team"
          />
          {teams?.find((team) => team.slug === teamSlug)?.name}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Teams</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {teams?.map((team) => (
            <DropdownMenuItem
              key={team.id}
              onClick={() => router.push(`/team/${team.slug}/dashboard`)}
            >
              <Avatar data={team} className="w-5 h-5 mr-2" type="team" />
              <span>{team.name}</span>
              <Check
                className={cn(
                  'ml-auto h-4 w-4',
                  teamSlug === team.slug ? 'opacity-100' : 'opacity-0'
                )}
              />
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <div onClick={() => setOpen(false)}>
          <CreateTeamButton />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TeamDropdown;
