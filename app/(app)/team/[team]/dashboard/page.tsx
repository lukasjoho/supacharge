import Container from '@/components/layout/Container';
import Timeline from '@/components/pages/dashboard/timeline';

const DashboardPage = () => {
  return (
    <div className="py-8 md:py-16">
      <Container>
        <Timeline />
      </Container>
    </div>
  );
};

export default DashboardPage;
