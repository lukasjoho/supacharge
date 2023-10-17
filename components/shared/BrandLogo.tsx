import Link from 'next/link';
import { Icons } from './Icons';

const BrandLogo = () => {
  return (
    <Link href="/">
      <div className="flex gap-2 items-center">
        <Icons.logoText className="h-7" />
      </div>
    </Link>
  );
};

export default BrandLogo;
