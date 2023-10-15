import Link from 'next/link';
import { Icons } from './Icons';

const BrandLogo = () => {
  return (
    <Link href="/">
      <div className="flex gap-2 items-center">
        <Icons.logoBase className="w-8 h-8" />
        <span>Supacharge</span>
      </div>
    </Link>
  );
};

export default BrandLogo;
