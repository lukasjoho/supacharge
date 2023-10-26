'use client';
import { useModal } from '@/components/shared/modal';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import InviteFormModal from './InviteFormModal';

const InviteButton = () => {
  const { show } = useModal();
  return (
    <Button
      className="gap-1.5"
      size="sm"
      onClick={() => show(<InviteFormModal />)}
    >
      <PlusCircle className="w-5 h-5" />
      Invite
    </Button>
  );
};

export default InviteButton;
