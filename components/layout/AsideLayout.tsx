import Container from '@/components/layout/Container';
import Title from '../shared/Title';
import AsideNavigation, { AsideNavigationProps } from './AsideNavigation';

interface AsideLayoutProps extends Omit<AsideNavigationProps, 'title'> {
  children: React.ReactNode;
  pageTitle: string;
  sidebarTitle: string;
}

const AsideLayout = ({
  children,
  team,
  page,
  pageTitle,
  items,
  sidebarTitle,
}: AsideLayoutProps) => {
  return (
    <Container className="flex flex-col md:flex-row grow overflow-hidden">
      <AsideNavigation
        items={items}
        team={team}
        page={page}
        title={sidebarTitle}
      />
      <div className="md:border-l grow md:pl-20 py-12 space-y-4 md:space-y-8 overflow-scroll">
        <Title>{pageTitle}</Title>
        {children}
      </div>
    </Container>
  );
};

export default AsideLayout;
