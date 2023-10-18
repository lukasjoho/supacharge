import { FC } from 'react';

import Container from '@/components/layout/Container';
import WalkthroughNavItem from './WalkthroughNavItem';
import { items } from './items';

interface WalkthroughNavProps {}

const WalkthroughNav: FC<WalkthroughNavProps> = () => {
  return (
    <div className="sticky top-0 md:top-0 py-4 md:py-6 z-10 bg-background/75 backdrop-blur-xl">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {items.map((item, idx) => {
            return <WalkthroughNavItem item={item} key={idx} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default WalkthroughNav;
