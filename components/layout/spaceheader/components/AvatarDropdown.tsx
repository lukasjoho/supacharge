import UserAvatar from '@/components/shared/UserAvatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth';
import { Monitor } from 'lucide-react';
import LogOutDropdownItem from './LogOutDropdownItem';

const AvatarDropdown = async () => {
  const session = await getAuthSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={session?.user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Monitor className="mr-2 h-4 w-4" />
          Website
        </DropdownMenuItem>

        <LogOutDropdownItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
