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
          <ul className="pb-4">
            {SITE_NAV_ITEMS.map((item) => {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-3xl block font-semibold text-left py-3 text-muted-foreground transition duration-100 hover:text-primary"
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
