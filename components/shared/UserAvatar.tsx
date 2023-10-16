import { AvatarProps } from '@radix-ui/react-avatar';
import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface UserAvatarProps extends AvatarProps {
  user: {
    image?: string | null;
    name?: string | null;
  };
}

const UserAvatar = ({ user, ...props }: UserAvatarProps) => {
  const { className, ...rest } = props;
  return (
    <Avatar className={className} {...rest}>
      <AvatarImage src={user?.image as string | undefined} />
      <AvatarFallback className="uppercase">
        {user?.name?.slice(0, 2) ?? (
          <User className="w-[60%] h-[60%] text-muted-foreground" />
        )}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
