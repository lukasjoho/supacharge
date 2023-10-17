import { getTimelineProjects } from '@/lib/actions';
import DragContainer from './components/DragContainer';
import ScrollWrapper from './components/ScrollWrapper';
import { generateRange } from './lib/utils';

interface TimelineProps {
  teamSlug: string;
}

const Timeline = async ({ teamSlug }: TimelineProps) => {
  const projects = await getTimelineProjects(teamSlug);
  let range = generateRange();
  return (
    <>
      <ScrollWrapper range={range}>
        <DragContainer projects={projects} range={range} />
      </ScrollWrapper>
    </>
  );
};

export default Timeline;
