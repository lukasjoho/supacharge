import { getAuthUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

const TeamPage = async ({ params }: { params: { team: string } }) => {
  const authUser = await getAuthUser();
  redirect(`/team/${params.team}/dashboard`);
};

export default TeamPage;
