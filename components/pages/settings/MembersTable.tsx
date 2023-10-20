import Avatar from '@/components/shared/Avatar';
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

interface MembersTableProps {
  team: string;
}

const MembersTable = async ({ team }: MembersTableProps) => {
  const teamWithMembers = await prisma.team.findUnique({
    where: {
      slug: team,
    },
    include: {
      users: true,
    },
  });

  const members = teamWithMembers?.users || [];
  return (
    <div className="space-y-4">
      <div className="border rounded-lg">
        <Table className="whitespace-nowrap">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar data={member} className="w-9 h-9" />
                    <span>{member.name}</span>
                  </div>
                </TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>
                  <Badge>Member</Badge>
                </TableCell>
                <TableCell>
                  {format(new Date(member.createdAt), 'MMM dd, yyyy')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MembersTable;
