import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import prisma from '@/lib/prisma';
import { format } from 'date-fns';
import { KeyRound } from 'lucide-react';
import CreateAPIKeyButton from './CreateAPIKeyButton';

interface APIKeysTableProps {
  team: string;
}

const APIKeysTable = async ({ team }: APIKeysTableProps) => {
  const apiKeys = await prisma.apiKey.findMany({
    where: {
      team: {
        slug: team,
      },
    },
  });
  return (
    <div className="space-y-4">
      <div className="border rounded-lg">
        <Table className="whitespace-nowrap">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Key</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiKeys.map((apiKey) => (
              <TableRow key={apiKey.id}>
                <TableCell className="font-medium">{apiKey.name}</TableCell>
                <TableCell>{apiKey.id}</TableCell>
                <TableCell>
                  {format(apiKey.createdAt, 'MMM dd, yyyy, hh:mm a')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {apiKeys.length === 0 && (
          <div className="flex flex-col items-center py-8 px-4">
            <KeyRound className="w-6 h-6" />
            <p className="font-semibold text-lg mt-1">No keys</p>
            <p className="text-muted-foreground text-sm">
              You have not created any keys yet. Create one.
            </p>
          </div>
        )}
      </div>
      <CreateAPIKeyButton team={team} />
    </div>
  );
};

export default APIKeysTable;
