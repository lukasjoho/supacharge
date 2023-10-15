'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVITEMS } from '../lib/navitems';

const Navbar = () => {
  const pathname = usePathname();
  const segment = pathname.split('/')[2];
  return (
    <nav className="mr-auto">
      <ul className="flex">
        {NAVITEMS.map((item) => {
          return (
            <li key={item.href}>
              <Link
                href={`/team/${item.href}`}
                className={cn(
                  'relative h-16 grid place-items-center text-muted-foreground px-4 font-medium',
                  '/' + segment === item.href && 'text-foreground'
                )}
              >
                <span>{item.label}</span>
                {'/' + segment === item.href && <ActiveUnderline />}
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
