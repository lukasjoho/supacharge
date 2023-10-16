import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Prisma } from '@prisma/client';

interface AssigneeProps {
  assignee: Prisma.UserGetPayload<{}>;
}

const Assignee = ({ assignee }: AssigneeProps) => {
  const { name, image } = assignee ?? {};
  return (
    <div>
      <Avatar className="w-7 h-7">
        <AvatarImage src={image ?? undefined} />
        <AvatarFallback>{name?.slice(0, 2)}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Assignee;
