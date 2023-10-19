import { cn } from '@/lib/utils';
import Link from 'next/link';
import ActiveUnderline from './ActiveUnderline';

interface DesktopNavListItemProps {
  isActive: boolean;
  href: string;
  children: React.ReactNode;
}

const DesktopNavListItem = ({
  children,
  href,
  isActive,
}: DesktopNavListItemProps) => {
  return (
    <li key={href}>
      <Link
        href={href}
        className={cn(
          'relative h-16 grid place-items-center text-muted-foreground px-4 font-medium',
          isActive && 'text-foreground'
        )}
      >
        <span>{children}</span>
        {isActive && <ActiveUnderline />}
      </Link>
    </li>
  );
};

export default DesktopNavListItem;
