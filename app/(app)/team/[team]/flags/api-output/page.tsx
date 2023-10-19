import AsideLayout from '@/components/layout/SidebarLayout';
import APIOutputWindow from '@/components/shared/CodeWindow/APIOutputWIndow';

const APIOutputPage = ({ params }: { params: { team: string } }) => {
  const { team } = params;
  return (
    <AsideLayout team={team} page="api-output" title="API Output">
      <APIOutputWindow />
    </AsideLayout>
  );
};

export default APIOutputPage;
