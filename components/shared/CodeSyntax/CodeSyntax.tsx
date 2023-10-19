import { cn } from '@/lib/utils';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeHeader, { CodeHeaderProps } from './CodeHeader';

interface CodeSyntaxProps
  extends CodeHeaderProps,
    React.HTMLProps<HTMLDivElement> {
  language?: string;
  children: string;
}

const CodeSyntax = ({
  children,
  language = 'javascript',
  ...props
}: CodeSyntaxProps) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn('border rounded-lg overflow-hidden', className)}
      {...rest}
    >
      <CodeHeader title="Example Request" />
      <SyntaxHighlighter style={irBlack} language={language}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSyntax;
