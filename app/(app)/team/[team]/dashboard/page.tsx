import Container from '@/components/layout/Container';
import ProjectsTable from '@/components/pages/dashboard/ProjectsTable/ProjectsTable';
import Timeline from '@/components/pages/dashboard/timeline';

const DashboardPage = ({ params }: { params: { team: string } }) => {
  return (
    <div className="py-8 md:py-16">
      <Container className="space-y-6 md:space-y-12">
        <Timeline teamSlug={params.team} />
        <ProjectsTable teamSlug={params.team} />
      </Container>
    </div>
  );
};

export default DashboardPage;
