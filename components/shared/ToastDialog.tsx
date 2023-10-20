import { X } from 'lucide-react';
import { FC } from 'react';
import toast from 'react-hot-toast';

interface ToastBodyProps {
  title?: string;
  message?: string;
  id: string;
}

const ToastDialog: FC<ToastBodyProps> = ({ title, message, id }) => {
  return (
    <div className="relative">
      <X
        className="h-4 w-4 absolute -top-1 -right-1 cursor-pointer z-10"
        onClick={() => toast.dismiss(id)}
      />
      <p className="font-medium relative -translate-y-1 pr-4">{title}</p>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ToastDialog;
