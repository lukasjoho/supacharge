import Container from '@/components/Container';
import NewProjectButton from '@/components/shared/new/NewProjectButton';
import AvatarDropdown from './components/AvatarDropdown';
import { TeamSelector } from './components/TeamSelector';

const TeamHeader = () => {
  return (
    <div className="border-b">
      <Container className="h-16 flex justify-between items-center">
        <TeamSelector />
        <div className="flex items-center gap-4">
          <NewProjectButton />
          <AvatarDropdown />
        </div>
      </Container>
    </div>
  );
};

export default TeamHeader;
