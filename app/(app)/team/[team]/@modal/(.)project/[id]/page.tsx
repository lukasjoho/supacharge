import ProjectModal from '@/components/pages/dashboard/ProjectModal';
import InterceptionModal from '@/components/shared/modal/InterceptionModal';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';

const ProjectInterceptionModal = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;
  const project = await prisma.project.findUnique({
    where: {
      id: id,
    },
  });
  if (!project) {
    notFound();
  }
  return (
    <InterceptionModal>
      <ProjectModal project={project} />
    </InterceptionModal>
  );
};

export default ProjectInterceptionModal;
