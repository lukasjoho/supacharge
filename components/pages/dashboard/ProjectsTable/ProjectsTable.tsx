import prisma from '@/lib/prisma';
import { DataTable } from './DataTable';
import { Payment, columns } from './columns';

async function getData(): Promise<Payment[]> {
  return [
    {
      id: '1',
      amount: 100,
      status: 'pending',
      email: 'mail@lukashoppe.com',
    },
  ];
}

interface ProjectsTableProps {
  teamSlug: string;
}

const ProjectsTable = async ({ teamSlug }: ProjectsTableProps) => {
  const payments = await getData();
  const projects = await prisma.project.findMany({
    include: {
      user: true,
    },
  });

  return <DataTable columns={columns} data={projects} teamSlug={teamSlug} />;
};

export default ProjectsTable;
