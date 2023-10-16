import UserAvatar from '@/components/shared/UserAvatar';
import { Prisma } from '@prisma/client';

interface AssigneeProps {
  assignee: Prisma.UserGetPayload<{}>;
}

const Assignee = ({ assignee }: AssigneeProps) => {
  return (
    <div>
      <UserAvatar className="w-7 h-7" user={assignee} />
    </div>
  );
};

export default Assignee;
