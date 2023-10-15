'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { APP_NAV_ITEMS } from '../lib/navitems';

const Navbar = () => {
  const segments = useSelectedLayoutSegments();
  return (
    <nav className="mr-auto">
      <ul className="flex">
        {APP_NAV_ITEMS.map((item) => {
          return (
            <li key={item.href}>
              <Link
                href={`/team/${segments[1]}/${item.href}`}
                className={cn(
                  'relative h-16 grid place-items-center text-muted-foreground px-4 font-medium',
                  '/' + segments[2] === item.href && 'text-foreground'
                )}
              >
                <span>{item.label}</span>
                {'/' + segments[2] === item.href && <ActiveUnderline />}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

const ActiveUnderline = () => {
  return (
    <motion.div
      className="w-full h-1.5 rounded-[2px] bg-foreground absolute bottom-0"
      layoutId="activeUnderline"
    />
  );
};
