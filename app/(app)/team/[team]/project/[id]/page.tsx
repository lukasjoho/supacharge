import prisma from '@/lib/prisma';

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const project = await prisma.project.findUnique({
    where: {
      id: params.id,
    },
  });
  return (
    <div>
      <h1>Project Page</h1>
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </div>
  );
};

export default ProjectPage;
