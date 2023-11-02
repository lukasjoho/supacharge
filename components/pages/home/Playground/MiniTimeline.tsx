'use client';
import { addDays, subDays } from 'date-fns';
import { memo } from 'react';
import DateGrid from '../../dashboard/timeline/components/DateGrid';
import ScrollWrapper from '../../dashboard/timeline/components/ScrollWrapper';
import TimelineHeader from '../../dashboard/timeline/components/TimelineHeader';
import { TimelineOptions } from '../../dashboard/timeline/lib/options';
import { generateRange } from '../../dashboard/timeline/lib/utils';
import { generateExperiment } from '../Variants/config';
import Draggable from './Draggable';

function generateMockProjects(today: Date) {
  const experiment = generateExperiment(today);
  return [
    {
      id: '1',
      name: 'Personalization Algorithm',
      startDate: subDays(today, 14).toISOString(),
      endDate: addDays(today, -2).toISOString(),
      type: 'dummy',
    },
    {
      id: '2',
      name: experiment.name,
      startDate: experiment.startDate,
      endDate: experiment.endDate,
      type: 'real',
    },
    {
      id: '3',
      name: 'Social Proof Elements',
      startDate: subDays(today, -4).toISOString(),
      endDate: addDays(today, 21).toISOString(),
      type: 'dummy',
    },
    // {
    //   id: '4',
    //   name: 'Payment Method Placement',
    //   startDate: subDays(today, -8).toISOString(),
    //   endDate: addDays(today, 23).toISOString(),
    //   type: 'dummy',
    // },
  ];
}

const MiniTimeline = () => {
  let range = generateRange(subDays(new Date(), 30), addDays(new Date(), 60));
  const projects = generateMockProjects(new Date());
  const timelineOptions: TimelineOptions = {
    unitWidth: 16,
    fontSize: 'text-2xs',
  };
  return (
    <ScrollWrapper mini range={range} options={timelineOptions}>
      <TimelineHeader range={range} options={timelineOptions} />
      <div className="relative grow flex flex-col">
        <DateGrid range={range} options={timelineOptions} />
        <div className="space-y-1 py-1 grow flex flex-col">
          {projects.map((project) => (
            <div className="relative h-8 grow" key={project.id}>
              <Draggable
                project={project}
                range={range}
                options={timelineOptions}
              />
            </div>
          ))}
        </div>
      </div>
    </ScrollWrapper>
  );
};

export default memo(MiniTimeline);
