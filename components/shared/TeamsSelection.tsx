import { getAuthUser } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Avatar from './Avatar';

const TeamsManager = async () => {
  const authUser = await getAuthUser();
  if (!authUser) return;
  const user = await prisma.user.findUnique({
    where: {
      email: authUser.email!,
    },
    include: {
      teams: true,
    },
  });
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Your teams</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {user?.teams.map((team) => (
          <Link
            href={`/team/${team.slug}`}
            key={team.id}
            className={cn(
              buttonVariants({ variant: 'secondary' }),
              'w-full justify-start flex items-center gap-3 h-14 text-lg'
            )}
          >
            <Avatar type="team" data={team} className="w-6 h-6" />
            {team.name}
          </Link>
        ))}
        <p className="text-sm text-muted-foreground text-center">or</p>
        <Button className="w-full">Create new team</Button>
      </CardContent>
    </Card>
  );
};

export default TeamsManager;
