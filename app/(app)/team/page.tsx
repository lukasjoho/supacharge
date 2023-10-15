import { getAuthUser } from '@/lib/auth';

const TeamPage = async () => {
  const user = await getAuthUser();
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default TeamPage;
