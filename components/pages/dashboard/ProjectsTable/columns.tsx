'use client';

import { ColumnDef } from '@tanstack/react-table';
import Assignee from './components/Assignee';
import FormattedDate from './components/Date';
import Decision from './components/Decision';
import Improvement from './components/Improvment';
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
    accessorKey: 'decision',
    header: 'Decision',
    cell: ({ row }) => {
      const { decision, id } = row.original;
      return <Decision decision={decision} projectId={id} />;
    },
  },
  {
    accessorKey: 'improvement',
    header: 'Improvement',
    cell: ({ row }) => {
      const { improvement } = row.original;
      return <Improvement improvement={improvement} />;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const { status, id } = row.original;
      return <Status projectId={id} status={status} />;
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
