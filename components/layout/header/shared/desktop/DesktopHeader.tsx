import Container from '@/components/layout/Container';

interface DesktopHeaderProps {
  children: React.ReactNode;
}

const DesktopHeader = ({ children }: DesktopHeaderProps) => {
  return (
    <div className="border-b">
      <Container className="flex items-center justify-between h-16">
        {children}
      </Container>
    </div>
  );
};

export default DesktopHeader;
