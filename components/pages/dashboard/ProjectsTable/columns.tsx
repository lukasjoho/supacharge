'use client';

import { ColumnDef } from '@tanstack/react-table';
import Assignee from './components/Assignee';
import FormattedDate from './components/Date';
import NameAndSlug from './components/NameAndSlug';
import Status from './components/Status';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export type Project = any;

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const { name, slug } = row.original;
      return <NameAndSlug name={name} slug={slug} />;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const { status } = row.original;
      return <Status status={status} />;
    },
  },
  {
    accessorKey: 'startDate',
    header: 'Start Date',
    cell: ({ row }) => {
      const { startDate } = row.original;
      return <FormattedDate date={startDate} />;
    },
  },
  {
    accessorKey: 'endDate',
    header: 'End Date',
    cell: ({ row }) => {
      const { endDate } = row.original;
      return <FormattedDate date={endDate} />;
    },
  },
  {
    accessorKey: 'assignee',
    header: 'Assignee',
    cell: ({ row }) => {
      const { user, id } = row.original;
      return <Assignee assignee={user} projectId={id} />;
    },
  },
];
