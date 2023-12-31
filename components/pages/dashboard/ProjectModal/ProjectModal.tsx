'use client';
import FormSubmitButton from '@/components/shared/FormSubmitButton';
import FileInput from '@/components/shared/ImageUpload/FileInput';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  useModal,
} from '@/components/shared/modal';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { createProject, updateProject } from '@/lib/actions';
import { cn, formatDate, slugify } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Prisma } from '@prisma/client';
import { CalendarClock, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as z from 'zod';
import VariantSelect from '../VariantSelect';

interface ProjectModalProps {
  project?: Prisma.ProjectGetPayload<{}>;
}

const objectSchema = z.object({
  id: z.string(),
  weight: z.number(),
});

const formSchema = z.object({
  name: z.string(),
  slug: z.string(),
  hypothesis: z.string().optional(),
  startDate: z.string(),
  endDate: z.string(),
  imageUrl: z.string().optional(),
  variants: z.array(objectSchema).optional(),
});

const ProjectModal = ({ project }: ProjectModalProps) => {
  const { hide } = useModal();
  const { name, slug, hypothesis, startDate, endDate, imageUrl, variants } =
    project ?? {};

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name ?? undefined,
      slug: slug ?? undefined,
      hypothesis: hypothesis ?? undefined,
      startDate: startDate?.toISOString() || new Date().toISOString(),
      endDate: endDate?.toISOString() ?? '',
      imageUrl: imageUrl ?? undefined,
      variants: (variants as any) || [
        {
          id: 'a',
          weight: 0.5,
        },
        { id: 'b', weight: 0.5 },
      ],
    },
  });
  const watchedValue = form.watch('name');
  const watchedStartDate = form.watch('startDate');
  const watchedEndDate = form.watch('endDate');
  const watchedVariants = form.watch('variants');

  useEffect(() => {
    console.log(form.getValues());
  }, [watchedVariants]);

  useEffect(() => {
    form.setValue('slug', 'feat-' + slugify(watchedValue));
  }, [watchedValue]);

  useEffect(() => {
    if (
      watchedStartDate &&
      watchedEndDate &&
      watchedStartDate > watchedEndDate
    ) {
      form.setValue('endDate', watchedStartDate);
    }
  }, [watchedStartDate]);

  function nullifyEmptyValues(
    values: z.infer<typeof formSchema>
  ): Omit<Prisma.ProjectCreateInput, 'team'> {
    const nullifiedValues: any = {};
    Object.keys(values).forEach((key) => {
      // @ts-ignore
      nullifiedValues[key] =
        // @ts-ignore
        values[key] === '' || !values[key] === undefined ? null : values[key];
    });
    return nullifiedValues;
  }

  const { isSubmitting } = form.formState;
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('VALUES: ', values);
    const nullifiedValues: Omit<Prisma.ProjectCreateInput, 'team'> =
      nullifyEmptyValues(values);
    let res;
    if (project) {
      res = await updateProject(project.id, nullifiedValues);
    } else {
      res = await createProject(nullifiedValues);
    }
    if (res.success) {
      toast.success(res.message);
      router.refresh();
      hide();
    } else {
      toast.error(res.message);
    }
  }
  return (
    <Form {...form}>
      <Modal
        as="form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:min-w-[600px]"
      >
        <ModalHeader>
          <ModalTitle>{project ? 'Edit Project' : 'Create Project'}</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Identifier</FormLabel>
                    <FormControl>
                      <Input placeholder="..." {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hypothesis"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <div className="flex justify-between items-center">
                      <FormLabel>Hypothesis</FormLabel>
                      <Button
                        size="xs"
                        type="button"
                        className="flex gap-1 bg-transparent bg-gradient-to-t from-violet-700/50 to-violet-600/50 border border-violet-400 text-primary"
                      >
                        <Sparkles className="h-3 w-3" /> AI Refine
                      </Button>
                    </div>
                    <FormControl>
                      <Textarea placeholder="Enter hypothesis...." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col grow shrink-0">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              formatDate(field.value)
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarClock className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={new Date(field.value)}
                          onSelect={(date) => {
                            const dateString = date?.toISOString();
                            field.onChange(dateString);
                          }}
                          disabled={(date) => {
                            return (
                              date < new Date(watchedStartDate) ||
                              date < new Date('1900-01-01')
                            );
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col grow shrink-0">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              formatDate(field.value)
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarClock className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={new Date(field.value)}
                          onSelect={(date) => {
                            const dateString = date?.toISOString();
                            field.onChange(dateString);
                          }}
                          disabled={(date) => {
                            return (
                              date < new Date(watchedStartDate) ||
                              date < new Date('1900-01-01')
                            );
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="variants"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Variants</FormLabel>
                  <FormControl>
                    <VariantSelect
                      setValue={form.setValue}
                      value={field.value!}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Image</FormLabel>
                  </div>
                  <FormControl>
                    <FileInput setValue={form.setValue} value={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </ModalContent>
        <ModalFooter className="flex justify-between">
          <FormSubmitButton
            className="ml-auto"
            label={project ? 'Update' : 'Create'}
            isSubmitting={isSubmitting}
          />
        </ModalFooter>
      </Modal>
    </Form>
  );
};

export default ProjectModal;
