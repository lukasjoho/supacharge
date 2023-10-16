import { redirect } from 'next/navigation';

const TeamPage = async ({ params }: { params: { team: string } }) => {
  redirect(`/team/${params.team}/dashboard`);
};

export default TeamPage;
