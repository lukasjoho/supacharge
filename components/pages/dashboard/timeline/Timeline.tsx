import { getTimelineProjects } from '@/lib/actions';
import DragContainer from './components/DragContainer';
import ScrollWrapper from './components/ScrollWrapper';
import { generateRange } from './lib/utils';

const Timeline = async () => {
  const projects = await getTimelineProjects();
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
