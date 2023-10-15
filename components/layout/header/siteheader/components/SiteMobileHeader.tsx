import GoToAppButton from '@/components/shared/GoToAppButton';
import Link from 'next/link';
import MobileHeader, {
  MobileMenu,
  MobileNavbar,
  ToggleMenu,
} from '../../MobileHeader';
import { SITE_NAV_ITEMS } from '../lib/site-nav-items';

const SiteMobileHeader = () => {
  return (
    <MobileHeader>
      <MobileNavbar>
        <ToggleMenu />
        <GoToAppButton size="sm" />
      </MobileNavbar>
      <MobileMenu>
        <nav className="pb-3">
          <ul>
            {SITE_NAV_ITEMS.map((item) => {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-3xl block font-semibold text-center py-8"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <GoToAppButton size="default" className="w-full" />
        </nav>
      </MobileMenu>
    </MobileHeader>
  );
};

export default SiteMobileHeader;
