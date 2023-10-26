import AsideLayout from '@/components/layout/AsideLayout';
import Members from '@/components/pages/settings/Members';
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
        <Members team={team} />
      </div>
    </AsideLayout>
  );
};

export default MembersPage;
