import { Badge } from '@/components/ui/badge';
import { Copy } from 'lucide-react';

const CopyButton = () => {
  return (
    <Badge
      className="flex gap-1 items-center font-normal text-2xs cursor-pointer"
      variant="outline"
    >
      Copy
      <Copy className="w-3 h-3" />
    </Badge>
  );
};

export default CopyButton;
