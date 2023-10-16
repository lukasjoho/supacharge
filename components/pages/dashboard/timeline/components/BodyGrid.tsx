import { cn } from '@/lib/utils';
import { addMonths, eachDayOfInterval, format, isToday } from 'date-fns';
import SETTINGS from '../lib/constants';
import { generateRange } from '../lib/utils';

const BodyGrid = () => {
  const { startDate, endDate } = generateRange();
  const months = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    months.push(new Date(currentDate));
    currentDate = addMonths(currentDate, 1);
  }
  const days = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
  return (
    <div className="absolute top-0 flex h-full ">
      {months.map((month) => (
        <div key={format(month, 'yyyy-MM')} className="border-r ">
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
                    width: SETTINGS.UNIT_WIDTH,
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

export default BodyGrid;
