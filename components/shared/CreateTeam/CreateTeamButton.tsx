'use client';

import { PlusCircle } from 'lucide-react';
import { useModal } from '../../shared/modal';
import { Button } from '../../ui/button';
import CreateTeamFormModal from './CreateTeamFormModal';

export default function CreateTeamButton() {
  const { show } = useModal();
  return (
    <Button
      className="flex gap-1.5 w-full"
      variant="secondary"
      onClick={() => show(<CreateTeamFormModal />)}
    >
      <PlusCircle className="w-5 h-5" />
      Create Team
    </Button>
  );
}
