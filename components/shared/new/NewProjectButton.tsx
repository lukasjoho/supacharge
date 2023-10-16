'use client';
import ProjectModal from '@/components/pages/dashboard/ProjectModal';
import { PlusCircle } from 'lucide-react';
import { Button } from '../../ui/button';
import { useModal } from '../modal';

const NewProjectButton = () => {
  const { show } = useModal();
  return (
    <Button onClick={() => show(<ProjectModal />)} variant="outline">
      <PlusCircle className="w-4 h-4 mr-1.5" />
      New
    </Button>
  );
};

export default NewProjectButton;
