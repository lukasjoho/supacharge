import { cn } from '@/lib/utils';
import { AvatarProps as UIAvatarProps } from '@radix-ui/react-avatar';
import { User } from 'lucide-react';
import { AvatarFallback, AvatarImage, UIAvatar } from '../ui/avatar';

interface AvatarProps extends UIAvatarProps {
  type?: 'user' | 'team';
  data?: {
    image?: string | null;
    name?: string | null;
  };
}

const Avatar = ({ data, type = 'user', ...props }: AvatarProps) => {
  const { className, ...rest } = props;
  return (
    <>
      <UIAvatar
        className={cn('', type === 'team' && 'rounded-sm', className)}
        {...rest}
      >
        <AvatarImage src={data?.image as string | undefined} />
        <AvatarFallback className="uppercase text-xs">
          {(type === 'user' && data?.name?.slice(0, 2)) ?? (
            <User className="w-[60%] h-[60%] text-muted-foreground" />
          )}
          {type === 'team' && data?.name?.slice(0, 1)}
        </AvatarFallback>
      </UIAvatar>
    </>
  );
};

export default Avatar;
