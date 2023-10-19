'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import MobileNavList from '../../shared/mobile/MobileNavList';
import MobileNavListItem from '../../shared/mobile/MobileNavListItem';
import { APP_NAV_ITEMS } from '../lib/navitems';

const AppMobileNavList = () => {
  const segments = useSelectedLayoutSegments();

  return (
    <MobileNavList>
      {APP_NAV_ITEMS.map((item) => (
        <MobileNavListItem
          key={item.href}
          href={`/team/${segments[1]}/${item.href}`}
        >
          {item.label}
        </MobileNavListItem>
      ))}
    </MobileNavList>
  );
};

export default AppMobileNavList;
