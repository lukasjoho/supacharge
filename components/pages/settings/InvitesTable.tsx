import { Badge } from '@/components/ui/badge';
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
import { Mail } from 'lucide-react';
import InviteButton from './InviteButton';
import { MembersTableProps } from './MembersTable';

const InvitesTable = async ({ team }: MembersTableProps) => {
  const invites = await prisma.invite.findMany({
    where: {
      team: {
        slug: team,
      },
      accepted: false,
    },
  });

  return (
    <div className="space-y-4">
      <div className="border rounded-lg">
        <Table className="whitespace-nowrap">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Sent At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invites.map((invite) => (
              <TableRow key={invite.id}>
                <TableCell className="font-medium">
                  {invite.sentToEmail}
                </TableCell>
                <TableCell>
                  <Badge className="bg-yellow-500">Pending</Badge>
                </TableCell>
                <TableCell>
                  {format(new Date(invite.createdAt), 'MMM dd, yyyy')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {invites.length === 0 && (
          <div className="flex flex-col items-center py-8 px-4">
            <Mail className="w-6 h-6" />
            <p className="font-semibold text-lg mt-1">No invites</p>
            <p className="text-muted-foreground text-sm">
              You have no invites outstanding. Create one.
            </p>
            <div className="mt-3">
              <InviteButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvitesTable;
