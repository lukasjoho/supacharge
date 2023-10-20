import Container from '@/components/layout/Container';
import Title from '../shared/Title';
import Sidebar, { SidebarProps } from './Sidebar';

interface AsideLayoutProps extends Omit<SidebarProps, 'title'> {
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
    <Container className="flex grow overflow-hidden">
      <Sidebar items={items} team={team} page={page} title={sidebarTitle} />
      <div className="border-l grow pl-20 py-12 space-y-8 overflow-scroll">
        <Title>{pageTitle}</Title>
        {children}
      </div>
    </Container>
  );
};

export default AsideLayout;
