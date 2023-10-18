import { getAuthUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

const TeamPage = async () => {
  const user = await getAuthUser();
  // @ts-ignore
  const currentTeamSlug = user?.currentTeam?.slug;
  if (!currentTeamSlug) {
    redirect('/teams');
  }
  redirect(`/team/${currentTeamSlug}`);
};

export default TeamPage;
