import { getProjects } from '@/lib/actions';
import DragContainer from './DragContainer';
import ScrollWrapper from './components/ScrollWrapper';
import { generateRange } from './lib/utils';

const Timeline = async () => {
  const projects = await getProjects();
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
