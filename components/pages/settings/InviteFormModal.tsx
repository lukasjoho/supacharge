import {
  Modal,
  ModalContent,
  ModalFooter,
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
import { createInvite } from '@/lib/actions';
import { useTeamName } from '@/lib/hooks/useTeamName';
import { nullifyEmptyValues } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email(),
});

const InviteFormModal = () => {
  const { hide } = useModal();
  const teamSlug = useTeamName();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: undefined,
    },
  });

  const router = useRouter();
  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const nullifiedValues = nullifyEmptyValues(values);
    toast(JSON.stringify(nullifiedValues));
    const res = await createInvite(nullifiedValues, teamSlug);
    if (res.success) {
      toast.success('Invite sent!');
      router.refresh();
      hide();
    } else {
      toast.error(res.message);
    }
  }
  return (
    <Form {...form}>
      <Modal as="form" onSubmit={form.handleSubmit(onSubmit)}>
        <ModalHeader>
          <ModalTitle>Invite team mate</ModalTitle>
        </ModalHeader>
        <ModalContent className="mb-1">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </ModalContent>
        <ModalFooter>
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Invite'}
          </Button>
        </ModalFooter>
      </Modal>
    </Form>
  );
};

export default InviteFormModal;
