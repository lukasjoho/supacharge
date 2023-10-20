'use client';
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
import { createTeam } from '@/lib/actions';
import { slugify } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  useModal,
} from '../modal';

const CreateTeamFormModal = () => {
  const { hide } = useModal();
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const formSchema = z.object({
    name: z.string(),
    slug: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      slug: undefined,
    },
  });
  const { isSubmitting } = form.formState;
  const formValues = form.getValues();
  const watchedValue = form.watch('name');
  useEffect(() => {
    form.setValue('slug', slugify(watchedValue));
  }, [watchedValue]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await createTeam(values);
    if (res.success) {
      await update({ teamSlug: res.data.slug });
      hide();
      toast.success('Team created');
      router.push(`/team/${res.data.slug}`);
    } else {
      toast.error('Team creation failed');
    }
  }
  return (
    <Form {...form}>
      <Modal as="form">
        <ModalHeader>
          <ModalTitle>Create team</ModalTitle>
        </ModalHeader>

        <ModalContent>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter team name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormItem>
              <FormLabel>Team URL</FormLabel>
              <Input
                value={`https://supacharge.com/team/${slugify(watchedValue)}`}
                disabled
              />
            </FormItem>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Creating...' : 'Create'}
          </Button>
        </ModalFooter>
      </Modal>
    </Form>
  );
};

export default CreateTeamFormModal;
