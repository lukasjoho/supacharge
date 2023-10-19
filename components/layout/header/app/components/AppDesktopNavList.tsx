'use client';
import { useSelectedLayoutSegments } from 'next/navigation';
import DesktopNavList from '../../shared/desktop/DesktopNavList';
import DesktopNavListItem from '../../shared/desktop/DesktopNavListItem';
import { APP_NAV_ITEMS } from '../lib/navitems';

const AppDesktopNavList = () => {
  const segments = useSelectedLayoutSegments();
  return (
    <DesktopNavList>
      {APP_NAV_ITEMS.map((item) => {
        return (
          <DesktopNavListItem
            key={item.href}
            isActive={item.href.startsWith('/' + segments[2])}
            href={`/team/${segments[1]}/${item.href}`}
          >
            {item.label}
          </DesktopNavListItem>
        );
      })}
    </DesktopNavList>
  );
};

export default AppDesktopNavList;
