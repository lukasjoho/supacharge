import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import prisma from '@/lib/prisma';
import { LayoutGrid, List } from 'lucide-react';
import { DataTable } from './DataTable';
import { columns } from './columns';
import GridView from './components/GridView';

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

  return (
    <Tabs defaultValue="table" className="space-y-4">
      <div className="flex justify-between items-center">
        <TabsList>
          <TabsTrigger value="table">
            <List className="w-4 h-4 mr-1.5" />
            Table
          </TabsTrigger>
          <TabsTrigger value="grid">
            <LayoutGrid className="w-4 h-4 mr-1.5" />
            Grid
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="table">
        <DataTable columns={columns} data={projects} teamSlug={teamSlug} />
      </TabsContent>
      <TabsContent value="grid">
        <GridView projects={projects} />
      </TabsContent>
    </Tabs>
  );
};

export default ProjectsTable;
