import BrandLogo from '@/components/shared/BrandLogo';
import GoToAppButton from '@/components/shared/GoToAppButton';
import DesktopHeader from '../../shared/desktop/DesktopHeader';

const SiteDesktopHeader = () => {
  return (
    <DesktopHeader>
      <BrandLogo />
      <GoToAppButton />
    </DesktopHeader>
  );
};

export default SiteDesktopHeader;
