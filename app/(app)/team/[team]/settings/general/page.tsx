import AsideLayout from '@/components/layout/AsideLayout';
import { settingsPages } from '@/lib/config/settings';

const GeneralPage = ({ params }: { params: { team: string } }) => {
  const { team } = params;

  return (
    <AsideLayout
      team={team}
      page="/settings/general"
      pageTitle="General"
      sidebarTitle="Settings"
      items={settingsPages}
    >
      <div>Settings</div>
    </AsideLayout>
  );
};

export default GeneralPage;
