import AsideLayout from '@/components/layout/SidebarLayout';
import APIKeysTable from '@/components/pages/apikey/APIKeysTable';
import FetchExample from '@/components/pages/apikey/FetchExample';

const APIKeyPage = ({ params }: { params: { team: string } }) => {
  const { team } = params;
  return (
    <AsideLayout team={team} page="api-key" title="API Keys">
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
