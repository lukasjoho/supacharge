import NewProjectButton from '@/components/shared/new/NewProjectButton';
import DesktopHeader from '../../shared/desktop/DesktopHeader';
import AppDesktopNavList from './AppDesktopNavList';
import AvatarDropdown from './AvatarDropdown';
import Settings from './Settings';
import TeamDropdown from './TeamDropdown';

const AppDesktopHeader = () => {
  return (
    <DesktopHeader>
      <div className="flex items-center gap-8">
        <TeamDropdown />
        <AppDesktopNavList />
      </div>
      <div className="flex items-center gap-4">
        <NewProjectButton />
        <Settings />
        <AvatarDropdown />
      </div>
    </DesktopHeader>
  );
};

export default AppDesktopHeader;
