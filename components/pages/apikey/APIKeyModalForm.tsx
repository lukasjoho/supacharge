import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  useModal,
} from '@/components/shared/modal';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createAPIKey } from '@/lib/actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
});

export interface APIKeyModalFormProps {
  team: string;
}

const APIKeyModalForm = ({ team }: APIKeyModalFormProps) => {
  const { hide } = useModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const res = await createAPIKey(values, team);
    if (res.success) {
      toast.success('API Key created.');
      router.refresh();
      hide();
    } else {
      toast.error('API Key creation failed.');
    }
    setLoading(false);
  }
  return (
    <Form {...form}>
      <Modal as="form" onSubmit={form.handleSubmit(onSubmit)}>
        <ModalHeader>
          <ModalTitle>Create New API Key</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="pb-6">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create'}
          </Button>
        </ModalContent>
      </Modal>
    </Form>
  );
};

export default APIKeyModalForm;
