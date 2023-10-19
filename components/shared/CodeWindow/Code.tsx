'use client';
import RealtimeLabel from './RealtimeLabel';
import { syntaxHighlight } from './syntax';

interface CodeProps {
  code: string;
  title: string;
  label?: boolean;
}

const Code = ({ code, title = 'Code', label }: CodeProps) => {
  return (
    <div className="h-full flex flex-col border rounded-lg overflow-hidden bg-muted/50">
      <div className="h-7 border-b flex justify-between items-center px-4 bg-muted/50 shrink-0">
        <p className="text-muted-foreground text-2xs">{title}</p>
        {label && <RealtimeLabel />}
      </div>
      <div className="relative grow">
        <pre
          className="absolute overflow-scroll w-full h-full left-0 top-0 p-4"
          dangerouslySetInnerHTML={{
            __html: syntaxHighlight(JSON.stringify(code, undefined, 4)),
          }}
        />
      </div>
    </div>
  );
};

export default Code;
