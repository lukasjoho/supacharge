import Container from '@/components/layout/Container';
import { KeyRound, TerminalSquare } from 'lucide-react';
import Title from '../shared/Title';
import Sidebar from './Sidebar';

const items = [
  {
    label: 'API Output',
    href: '/api-output',
    icon: <TerminalSquare className="w-5 h-5" />,
  },
  {
    label: 'API Key',
    href: '/api-key',
    icon: <KeyRound className="w-5 h-5" />,
  },
];

interface AsideLayoutProps {
  children: React.ReactNode;
  team: string;
  page: string;
  title: string;
}

const AsideLayout = ({ children, team, page, title }: AsideLayoutProps) => {
  return (
    <Container className="flex grow overflow-hidden">
      <Sidebar items={items} team={team} page={page} />
      <div className="border-l grow pl-20 py-12 space-y-8 overflow-scroll">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  );
};

export default AsideLayout;
