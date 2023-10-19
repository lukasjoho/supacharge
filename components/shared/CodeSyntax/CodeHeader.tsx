import CopyButton from './CopyButton';

export interface CodeHeaderProps {
  title?: string;
}

const CodeHeader = ({ title = 'Code' }: CodeHeaderProps) => {
  return (
    <div className="text-xs text-muted-foreground bg-muted/50 py-2 px-4 flex justify-between items-center">
      <div>{title}</div>
      <CopyButton />
    </div>
  );
};

export default CodeHeader;
