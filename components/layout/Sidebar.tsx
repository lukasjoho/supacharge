'use client';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface SidebarProps {
  items: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[];
  team: string;
  page: string;
  title: string;
}

const Sidebar = ({ items, team, page, title }: SidebarProps) => {
  return (
    <div className="shrink-0 min-w-[240px] py-12 pr-6 space-y-3">
      <h1 className="font-medium text-lg pl-3">{title}</h1>
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={`/team/${team}${item.href}`}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'sm' }),
              'text-left flex gap-2 items-center justify-start font-medium',
              item.href === page
                ? 'bg-muted hover:bg-accent hover:text-accent-foreground'
                : ''
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
