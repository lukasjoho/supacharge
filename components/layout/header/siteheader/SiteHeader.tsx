import DesktopHeader from './components/DesktopHeader';
import MobileHeader from './components/MobileHeader';

const SiteHeader = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
    </>
  );
};

export default SiteHeader;
