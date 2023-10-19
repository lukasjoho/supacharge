import GoToAppButton from '@/components/shared/GoToAppButton';

import { SITE_NAV_ITEMS } from '../../lib/config';
import MobileDropdown from '../../shared/mobile/MobileDropdown';
import MobileHeader from '../../shared/mobile/MobileHeader';
import MobileNavList from '../../shared/mobile/MobileNavList';
import MobileNavListItem from '../../shared/mobile/MobileNavListItem';
import MobileNavbar from '../../shared/mobile/MobileNavbar';
import MobileToggle from '../../shared/mobile/MobileToggle';

const SiteMobileHeader = () => {
  return (
    <MobileHeader>
      <MobileNavbar>
        <MobileToggle />
        <GoToAppButton size="sm" />
      </MobileNavbar>
      <MobileDropdown>
        <MobileNavList>
          {SITE_NAV_ITEMS.map((item) => {
            return (
              <MobileNavListItem key={item.href} href={item.href}>
                {item.label}
              </MobileNavListItem>
            );
          })}
        </MobileNavList>
        <GoToAppButton size="default" className="w-full" />
      </MobileDropdown>
    </MobileHeader>
  );
};

export default SiteMobileHeader;
