import LoginButton from '@/components/shared/LoginButton';
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
        <LoginButton />
      </MobileNavbar>
      <MobileMenu>
        <nav className="pb-3">
          <ul>
            {SITE_NAV_ITEMS.map((item) => {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-3xl block font-semibold text-center"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LoginButton className="w-full" />
        </nav>
      </MobileMenu>
    </MobileHeader>
  );
};

export default SiteMobileHeader;
