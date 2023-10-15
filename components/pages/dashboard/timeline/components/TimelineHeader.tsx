import { cn } from '@/lib/utils';
import { addMonths, eachDayOfInterval, format, isToday } from 'date-fns';
import { memo } from 'react';
import SETTINGS from '../lib/constants';

interface TimelineHeaderProps {
  rangeStart: string;
  rangeEnd: string;
}

const TimelineHeader = ({ rangeStart, rangeEnd }: TimelineHeaderProps) => {
  // Create an array of months within the specified date range

  const months = [];
  let currentDate = new Date(rangeStart);

  while (currentDate <= new Date(rangeEnd)) {
    months.push(new Date(currentDate));
    currentDate = addMonths(currentDate, 1);
  }

  // Create an array of all days within the specified date range
  const days = eachDayOfInterval({
    start: new Date(rangeStart),
    end: new Date(rangeEnd),
  });

  return (
    <div className="flex">
      {/* <div className="w-[140px] sticky left-0 shrink-0 border-r backdrop-blur-xl bg-background/90 z-10"></div> */}
      {months.map((month) => (
        <div key={format(month, 'yyyy-MM')} className="border-r">
          <div className="text-sm text-muted-foreground pl-2 py-1 whitespace-nowrap border-b">
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
                    'text-sm grid place-items-center',
                    isToday(day) &&
                      'bg-red-500 text-foreground rounded-lg font-medium'
                  )}
                  style={{
                    width: SETTINGS.UNIT_WIDTH,
                    height: SETTINGS.UNIT_WIDTH,
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
