import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InviteButton from './InviteButton';
import InvitesTable from './InvitesTable';
import MembersTable, { MembersTableProps } from './MembersTable';

interface MembersProps extends MembersTableProps {}

const Members = (props: MembersProps) => {
  return (
    <Tabs defaultValue="members" className="space-y-4">
      <div className="flex justify-between items-center">
        <TabsList>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="invites">Invites</TabsTrigger>
        </TabsList>
        <InviteButton />
      </div>
      <TabsContent value="members">
        <MembersTable {...props} />
      </TabsContent>
      <TabsContent value="invites">
        <InvitesTable {...props} />
      </TabsContent>
    </Tabs>
  );
};

export default Members;
