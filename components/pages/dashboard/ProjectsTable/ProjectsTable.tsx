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

const ProjectsTable = async () => {
  const payments = await getData();
  const projects = await prisma.project.findMany({
    include: {
      user: true,
    },
  });

  return <DataTable columns={columns} data={projects} />;
};

export default ProjectsTable;
