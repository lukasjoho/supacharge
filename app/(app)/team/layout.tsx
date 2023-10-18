import AssignCurrentTeam from '@/components/shared/AssignCurrentTeam';

const TeamLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AssignCurrentTeam />
      {children}
    </>
  );
};

export default TeamLayout;
