import { Prisma } from '@prisma/client';
import { areIntervalsOverlapping, startOfDay } from 'date-fns';

export function generateRows(items: Prisma.ProjectGetPayload<{}>[]) {
  const rows: Prisma.ProjectGetPayload<{}>[][] = [];

  // Sort the items by their start date in ascending order
  items.sort((a, b) => a.id.localeCompare(b.id));

  items.forEach((item) => {
    let addedToRow = false;

    rows.forEach((row: Prisma.ProjectGetPayload<{}>[]) => {
      // Check if the item overlaps with any item in the current row
      const overlap = row.some((rowItem) => {
        const startDate1 = startOfDay(new Date(rowItem.startDate!));
        const endDate1 = startOfDay(new Date(rowItem.endDate!));
        const startDate2 = startOfDay(new Date(item.startDate!));
        const endDate2 = startOfDay(new Date(item.endDate!));

        // Check for overlapping conditions on a day level
        const dayOverlap = areIntervalsOverlapping(
          {
            start: startDate1,
            end: endDate1,
          },
          {
            start: startDate2,
            end: endDate2,
          }
        );

        if (dayOverlap) {
          return true;
        }

        return false;
      });

      if (!overlap && !addedToRow) {
        row.push(item);
        addedToRow = true;
      }
    });

    if (!addedToRow) {
      rows.push([item]);
    }
  });

  return rows;
}
