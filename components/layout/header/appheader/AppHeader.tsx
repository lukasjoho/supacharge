import AppDesktopHeader from './components/AppDesktopHeader';
import AppMobileHeader from './components/AppMobileHeader';

const AppHeader = () => {
  return (
    <>
      <div className="hidden md:block">
        <AppDesktopHeader />
      </div>
      <div className="md:hidden">
        <AppMobileHeader />
      </div>
    </>
  );
};

export default AppHeader;
