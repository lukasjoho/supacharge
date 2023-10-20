import AsideLayout from '@/components/layout/AsideLayout';
import MembersTable from '@/components/pages/settings/MembersTable';
import { settingsPages } from '@/lib/config/settings';

const MembersPage = ({ params }: { params: { team: string } }) => {
  const { team } = params;

  return (
    <AsideLayout
      team={team}
      page="/settings/members"
      pageTitle="Team Members"
      sidebarTitle="Settings"
      items={settingsPages}
    >
      <div>
        <MembersTable team={team} />
      </div>
    </AsideLayout>
  );
};

export default MembersPage;
