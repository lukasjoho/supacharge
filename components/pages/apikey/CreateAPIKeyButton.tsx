'use client';
import { useModal } from '@/components/shared/modal';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import APIKeyModalForm, { APIKeyModalFormProps } from './APIKeyModalForm';

interface CreateAPIKeyButtonProps extends APIKeyModalFormProps {}

const CreateAPIKeyButton = ({ team }: CreateAPIKeyButtonProps) => {
  const { show } = useModal();
  return (
    <Button
      className="flex gap-1.5 items-center"
      onClick={() => show(<APIKeyModalForm team={team} />)}
    >
      <PlusCircle className="w-5 h-5" />
      Create API Key
    </Button>
  );
};

export default CreateAPIKeyButton;
