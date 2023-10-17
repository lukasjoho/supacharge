import prisma from '@/lib/prisma';
import { DataTable } from './DataTable';
import { columns } from './columns';

interface ProjectsTableProps {
  teamSlug: string;
}

const ProjectsTable = async ({ teamSlug }: ProjectsTableProps) => {
  const projects = await prisma.project.findMany({
    include: {
      user: true,
    },
    orderBy: {
      name: 'asc',
    },
    where: {
      team: {
        slug: teamSlug,
      },
    },
  });

  return <DataTable columns={columns} data={projects} teamSlug={teamSlug} />;
};

export default ProjectsTable;
