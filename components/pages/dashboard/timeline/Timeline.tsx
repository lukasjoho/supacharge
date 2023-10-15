'use client';
import { updateProject } from '@/lib/actions';
import { Prisma } from '@prisma/client';
import { areIntervalsOverlapping } from 'date-fns';
import { memo, useEffect, useState } from 'react';
import DragItem from './components/DragItem';
import TimelineHeader from './components/TimelineHeader';
import SETTINGS from './lib/constants';

interface TimelineProps {
  projects: Prisma.ProjectGetPayload<{}>[];
}

const Timeline = ({ projects }: TimelineProps) => {
  const [items, setItems] = useState<Prisma.ProjectGetPayload<{}>[]>(projects);
  const [rows, setRows] = useState<Prisma.ProjectGetPayload<{}>[][]>(
    generateRows(projects)
  );
  useEffect(() => {
    setRows(generateRows(items));
  }, [items]);

  async function updateItem(id: string, data: any) {
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      const newItems = [...prevItems];
      newItems[index] = {
        ...newItems[index],
        ...data,
      };
      return newItems;
    });
    const res = await updateProject(id, data);
  }

  const RANGESTART = '2023-10-01';
  const RANGEEND = '2024-10-01';

  return (
    <>
      <div className="w-full overflow-scroll border rounded-lg">
        <div className="inline-block">
          <TimelineHeader rangeStart={RANGESTART} rangeEnd={RANGEEND} />
          <div className="py-2 min-h-[162px] space-y-2">
            {rows.map((row: Prisma.ProjectGetPayload<{}>[]) => {
              return (
                <div key={JSON.stringify(row)} className="h-12 relative flex">
                  {row.map((item: Prisma.ProjectGetPayload<{}>) => {
                    return (
                      <DragItem
                        key={item.id}
                        updateItem={updateItem}
                        item={item}
                        x={0.5 * SETTINGS.UNIT_WIDTH}
                        rangeStart={RANGESTART}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

function generateRows(items: Prisma.ProjectGetPayload<{}>[]) {
  const rows: Prisma.ProjectGetPayload<{}>[][] = [];

  // Sort the items by their start date in ascending order
  items.sort((a, b) => a.id.localeCompare(b.id));

  items.forEach((item) => {
    let addedToRow = false;

    rows.forEach((row: Prisma.ProjectGetPayload<{}>[]) => {
      // Check if the item overlaps with any item in the current row
      const overlap = row.some((rowItem) => {
        const startDate1 = new Date(rowItem.startDate!);
        const endDate1 = new Date(rowItem.endDate!);
        const startDate2 = new Date(item.startDate!);
        const endDate2 = new Date(item.endDate!);

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

export default memo(Timeline);
