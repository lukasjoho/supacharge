import { cn } from '@/lib/utils';
import { format, isToday } from 'date-fns';
import SETTINGS from '../lib/constants';
import { TimelineOptions } from '../lib/options';
import { Range } from '../lib/types';
import { generateTimelineData } from '../lib/utils';

interface DateGridProps {
  range: Range;
  options?: TimelineOptions;
}

const DateGrid = ({ range, options }: DateGridProps) => {
  const { months, days } = generateTimelineData(range);
  return (
    <div className="absolute top-0 flex h-full ">
      {months.map((month) => (
        <div key={format(month, 'yyyy-MM')} className="border-r -mr-[1px]">
          <div className="flex h-full">
            {days
              .filter(
                (day) => format(day, 'yyyy-MM') === format(month, 'yyyy-MM')
              )
              .map((day) => (
                <div
                  key={format(day, 'yyyy-MM-dd')}
                  className={cn('text-sm block h-full')}
                  style={{
                    width: options?.unitWidth || SETTINGS.UNIT_WIDTH,
                  }}
                >
                  {isToday(day) && (
                    <div className="h-full w-[2px] -mt-[1px] bg-red-500 relative z-10" />
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DateGrid;
