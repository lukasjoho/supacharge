import AsideLayout from '@/components/layout/AsideLayout';
import APIOutputWindow from '@/components/shared/CodeWindow/APIOutputWIndow';
import { flagsPages } from '@/lib/config/flags';

const APIOutputPage = ({ params }: { params: { team: string } }) => {
  const { team } = params;
  return (
    <AsideLayout
      team={team}
      page="/flags/api-output"
      pageTitle="API Output"
      sidebarTitle="Feature Flags"
      items={flagsPages}
    >
      <APIOutputWindow teamSlug={team} />
    </AsideLayout>
  );
};

export default APIOutputPage;
