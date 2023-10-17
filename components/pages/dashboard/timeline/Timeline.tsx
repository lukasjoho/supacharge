import { getTimelineProjects } from '@/lib/actions';
import { addDays, subDays } from 'date-fns';
import DragContainer from './components/DragContainer';
import ScrollWrapper from './components/ScrollWrapper';
import { generateRange } from './lib/utils';

interface TimelineProps {
  teamSlug: string;
}

const Timeline = async ({ teamSlug }: TimelineProps) => {
  const projects = await getTimelineProjects(teamSlug);
  let range = generateRange(subDays(new Date(), 60), addDays(new Date(), 60));
  return (
    <>
      <ScrollWrapper range={range}>
        <DragContainer projects={projects} range={range} />
      </ScrollWrapper>
    </>
  );
};

export default Timeline;
