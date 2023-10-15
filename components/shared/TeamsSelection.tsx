import { getAuthUser } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const TeamsSelection = async () => {
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
        <CardTitle>Select a team</CardTitle>
      </CardHeader>
      <CardContent>
        {user?.teams.map((team) => (
          <Button variant="secondary">{team.name}</Button>
        ))}
        <p className="text-sm text-muted-foreground">or</p>
        <Button>Create new team</Button>
      </CardContent>
    </Card>
  );
};

export default TeamsSelection;
