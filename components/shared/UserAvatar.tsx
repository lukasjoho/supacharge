import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface UserAvatarProps {
  user: any;
}

const UserAvatar = ({ user }: UserAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={user?.image} />
      <AvatarFallback className="uppercase">
        {user.name?.slice(0, 2)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
