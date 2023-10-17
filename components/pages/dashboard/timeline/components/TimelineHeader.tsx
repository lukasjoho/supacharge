import { cn } from '@/lib/utils';
import { addMonths, eachDayOfInterval, format, isToday } from 'date-fns';
import { memo } from 'react';
import SETTINGS from '../lib/constants';
import { TimelineOptions } from '../lib/options';
import { Range } from '../lib/types';

interface TimelineHeaderProps {
  range: Range;
  options?: TimelineOptions;
}

const TimelineHeader = ({ range, options }: TimelineHeaderProps) => {
  const months = [];
  let currentDate = range.rangeStart;

  while (currentDate <= range.rangeEnd) {
    months.push(currentDate);
    currentDate = addMonths(currentDate, 1);
  }

  const days = eachDayOfInterval({
    start: range.rangeStart,
    end: range.rangeEnd,
  });

  let fontSize = options?.fontSize || 'text-sm';

  return (
    <div className={cn('flex', fontSize)}>
      {months.map((month) => (
        <div key={format(month, 'yyyy-MM')} className="border-r -mr-[1px]">
          <div className="text-muted-foreground pl-2 py-1 whitespace-nowrap border-b">
            {format(month, 'MMMM yyyy')}
          </div>
          <div className="flex border-b text-muted-foreground">
            {days
              .filter(
                (day) => format(day, 'yyyy-MM') === format(month, 'yyyy-MM')
              )
              .map((day) => (
                <div
                  key={format(day, 'yyyy-MM-dd')}
                  //if is today then red
                  className={cn(
                    'grid place-items-center',
                    isToday(day) &&
                      'bg-red-500 text-foreground rounded-lg rounded-bl-none font-medium'
                  )}
                  style={{
                    width: options?.unitWidth || SETTINGS.UNIT_WIDTH,
                    height: options?.unitWidth || SETTINGS.UNIT_WIDTH,
                  }}
                >
                  {format(day, 'dd')}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(TimelineHeader);
