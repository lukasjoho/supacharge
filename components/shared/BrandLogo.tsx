import { Icons } from './Icons';

const BrandLogo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Icons.logoBase className="w-8 h-8" />
      <span>Supacharge</span>
    </div>
  );
};

export default BrandLogo;
