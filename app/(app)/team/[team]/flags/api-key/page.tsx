import AsideLayout from '@/components/layout/AsideLayout';
import APIKeysTable from '@/components/pages/apikey/APIKeysTable';
import FetchExample from '@/components/pages/apikey/FetchExample';
import { flagsPages } from '@/lib/config/flags';

const APIKeyPage = ({ params }: { params: { team: string } }) => {
  const { team } = params;
  return (
    <AsideLayout
      team={team}
      page="/flags/api-key"
      pageTitle="API Key"
      items={flagsPages}
      sidebarTitle="Feature Flags"
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <APIKeysTable team={team} />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <FetchExample />
        </div>
      </div>
    </AsideLayout>
  );
};

export default APIKeyPage;
