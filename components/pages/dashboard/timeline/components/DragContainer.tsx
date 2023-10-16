'use client';
import { updateProject } from '@/lib/actions';
import { Prisma } from '@prisma/client';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { memo, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { generateRows } from '../lib/generate-rows';
import { Range } from '../lib/types';
import DateGrid from './DateGrid';
import DragItem from './DragItem';
import TimelineHeader from './TimelineHeader';

interface DragContainerProps {
  projects: Prisma.ProjectGetPayload<{}>[];
  range: Range;
}

const DragContainer = ({ projects, range }: DragContainerProps) => {
  const router = useRouter();

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
    if (res.success) {
      toast.success(
        `Updated to: ${
          format(res.data.startDate, 'MMM dd') +
          ' - ' +
          format(res.data.endDate, 'MMM dd')
        }`
      );
    } else {
      toast.error('Error updating project');
    }
    router.refresh();
  }

  return (
    <>
      <div className="inline-block">
        <TimelineHeader range={range} />

        <div className="relative py-2 min-h-[162px] space-y-2">
          <DateGrid range={range} />
          {rows.map((row: Prisma.ProjectGetPayload<{}>[]) => {
            return (
              <div key={JSON.stringify(row)} className="h-12 relative flex">
                {row.map((item: Prisma.ProjectGetPayload<{}>) => {
                  return (
                    <DragItem
                      key={item.id}
                      updateItem={updateItem}
                      item={item}
                      range={range}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default memo(DragContainer);
