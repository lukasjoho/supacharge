import Avatar from '@/components/shared/Avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth';
import { Monitor } from 'lucide-react';
import Link from 'next/link';
import LogOutDropdownItem from './LogOutDropdownItem';

const AvatarDropdown = async () => {
  const session = await getAuthSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar data={session?.user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/">
            <Monitor className="mr-2 h-4 w-4" />
            Website
          </Link>
        </DropdownMenuItem>

        <LogOutDropdownItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
