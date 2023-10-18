'use client';

import WalkthroughItem from './WalkthroughItem';
import WalkthroughNav from './WalkthroughNav';
import WalkthroughProvider from './WalkthroughProvider';
import { items } from './items';

const WalkthroughBody = () => {
  return (
    <WalkthroughProvider>
      <div>
        <WalkthroughNav />
        <div className="pt-16 md:pt-32 space-y-24 md:space-y-48">
          {items.map((item, idx) => {
            return (
              <WalkthroughItem
                key={idx}
                item={item}
                orientation={idx % 2 === 0 ? 'left' : 'right'}
              />
            );
          })}
        </div>
      </div>
    </WalkthroughProvider>
  );
};

export default WalkthroughBody;
