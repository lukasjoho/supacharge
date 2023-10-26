import NewProjectButton from '@/components/shared/new/NewProjectButton';
import MobileDropdown from '../../shared/mobile/MobileDropdown';
import MobileHeader from '../../shared/mobile/MobileHeader';
import MobileNavbar from '../../shared/mobile/MobileNavbar';
import MobileToggle from '../../shared/mobile/MobileToggle';
import AppMobileNavList from './AppMobileNavList';
import AvatarDropdown from './AvatarDropdown';
import SettingsLink from './Settings';

const AppMobileHeader = () => {
  return (
    <MobileHeader>
      <MobileNavbar>
        <MobileToggle />
        <div className="flex items-center gap-4">
          <NewProjectButton />
          <SettingsLink />
          <AvatarDropdown />
        </div>
      </MobileNavbar>
      <MobileDropdown>
        <AppMobileNavList />
      </MobileDropdown>
    </MobileHeader>
  );
};

export default AppMobileHeader;
