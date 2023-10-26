import OptimizedImage from '@/components/shared/OptimizedImage';
import { formatInitials } from '@/lib/utils';
import { Prisma } from '@prisma/client';
import Assignee from './Assignee';

interface GridViewProps {
  projects: Prisma.ProjectGetPayload<{
    include: {
      user: true;
    };
  }>[];
}

const GridView = ({ projects }: GridViewProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <GridItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default GridView;

interface GridItemProps {
  project: Prisma.ProjectGetPayload<{
    include: {
      user: true;
    };
  }>;
}

const GridItem = ({ project }: GridItemProps) => {
  return (
    <>
      <div className="space-y-3">
        <div className="aspect-video overflow-hidden relative rounded-lg">
          {project.imageUrl && (
            <OptimizedImage src={project.imageUrl} objectFit="contain" />
          )}
          {!project.imageUrl && (
            <div className="bg-muted grid place-items-center text-3xl w-full h-full">
              {formatInitials(project.name)}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl xl:text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
            {project.name}
          </h2>
          <Assignee
            className="mr-1"
            assignee={project.user!}
            projectId={project.id}
          />
        </div>
      </div>
    </>
  );
};
