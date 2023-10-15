import Container from '@/components/Container';
import AvatarDropdown from './components/AvatarDropdown';
import { TeamSelector } from './components/TeamSelector';

const TeamHeader = () => {
  return (
    <div className="border-b">
      <Container className="h-16 flex justify-between items-center">
        <TeamSelector />
        <AvatarDropdown />
      </Container>
    </div>
  );
};

export default TeamHeader;
