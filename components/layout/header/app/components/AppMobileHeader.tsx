import MobileDropdown from '../../shared/mobile/MobileDropdown';
import MobileHeader from '../../shared/mobile/MobileHeader';
import MobileNavbar from '../../shared/mobile/MobileNavbar';
import MobileToggle from '../../shared/mobile/MobileToggle';
import AppMobileNavList from './AppMobileNavList';
import AvatarDropdown from './AvatarDropdown';

const AppMobileHeader = () => {
  return (
    <MobileHeader>
      <MobileNavbar>
        <MobileToggle />
        <AvatarDropdown />
      </MobileNavbar>
      <MobileDropdown>
        <AppMobileNavList />
      </MobileDropdown>
    </MobileHeader>
  );
};

export default AppMobileHeader;
