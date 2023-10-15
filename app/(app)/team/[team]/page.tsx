import { getAuthUser } from '@/lib/auth';

const TeamPage = async ({ params }: { params: { team: string } }) => {
  const authUser = await getAuthUser();

  return <div>{JSON.stringify(authUser, null, 2)}</div>;
};

export default TeamPage;
