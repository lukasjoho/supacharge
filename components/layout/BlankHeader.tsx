import { Icons } from '../shared/Icons';
import Container from './Container';

const BlankHeader = () => {
  return (
    <div className="border-b">
      <Container className="h-14 md:h-16 flex items-center justify-center">
        <Icons.logoText className="h-7" />
      </Container>
    </div>
  );
};

export default BlankHeader;
