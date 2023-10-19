import NewProjectButton from '@/components/shared/new/NewProjectButton';
import DesktopHeader from '../../shared/desktop/DesktopHeader';
import AppDesktopNavList from './AppDesktopNavList';
import AvatarDropdown from './AvatarDropdown';
import TeamSelector from './TeamSelector';

const AppDesktopHeader = () => {
  return (
    <DesktopHeader>
      <div className="flex items-center gap-8">
        <TeamSelector />
        <AppDesktopNavList />
      </div>
      <div className="flex items-center gap-4">
        <NewProjectButton />
        <AvatarDropdown />
      </div>
    </DesktopHeader>
  );
};

export default AppDesktopHeader;
