import Link from 'next/link';
import MobileHeader, {
  MobileMenu,
  MobileNavbar,
  ToggleMenu,
} from '../../MobileHeader';
import { APP_NAV_ITEMS } from '../lib/navitems';
import AvatarDropdown from './AvatarDropdown';

const AppMobileHeader = () => {
  return (
    <MobileHeader>
      <MobileNavbar>
        <ToggleMenu />
        <AvatarDropdown />
      </MobileNavbar>
      <MobileMenu>
        <nav className="pb-3">
          <ul>
            {APP_NAV_ITEMS.map((item) => {
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
        </nav>
      </MobileMenu>
    </MobileHeader>
  );
};

export default AppMobileHeader;
