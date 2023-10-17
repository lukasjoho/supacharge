import Title from '@/components/shared/Title';

interface ItemTitleProps {
  children: React.ReactNode;
}

export const ItemTitle = ({ children }: ItemTitleProps) => {
  return (
    <Title className="text-center text-lg text-muted-foreground px-4 py-4">
      {children}
    </Title>
  );
};
