import { isWithinInterval } from 'date-fns';
import { useEffect, useState } from 'react';

export function useIsActive(startDate: Date, endDate: Date) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const isWithin = isWithinInterval(
      new Date(new Date().setHours(12, 0, 0, 0)),
      {
        start: startDate,
        end: endDate,
      }
    );
    setActive(isWithin);
  }, [startDate, endDate]);

  return active;
}
