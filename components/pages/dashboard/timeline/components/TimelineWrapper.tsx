import Container from '@/components/layout/Container';
import { getProjects } from '@/lib/actions';
import Timeline from '../Timeline';

const TimelineWrapper = async () => {
  const projects = await getProjects();
  return (
    <Container>
      <Timeline projects={projects} />
    </Container>
  );
};

export default TimelineWrapper;
