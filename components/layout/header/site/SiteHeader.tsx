import SiteDesktopHeader from './components/SiteDesktopHeader';
import SiteMobileHeader from './components/SiteMobileHeader';

const SiteHeader = () => {
  return (
    <>
      <div className="hidden md:block">
        <SiteDesktopHeader />
      </div>
      <div className="md:hidden relative z-40">
        <SiteMobileHeader />
      </div>
    </>
  );
};

export default SiteHeader;
