import prisma from '@/lib/prisma';
import CodeSyntax from '../CodeSyntax';

interface APIOutputWindowProps {
  teamSlug: string;
}

const APIOutputWindow = async ({ teamSlug }: APIOutputWindowProps) => {
  const flags = await prisma.project.findMany({
    where: {
      team: {
        slug: teamSlug,
      },
    },
    select: {
      id: true,
      slug: true,
      name: true,
      startDate: true,
      endDate: true,
      variants: true,
    },
  });
  return (
    <CodeSyntax title="API Output" language="json">
      {JSON.stringify(flags, null, 4)}
    </CodeSyntax>
  );
};

export default APIOutputWindow;
