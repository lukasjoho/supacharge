import GetStarted from '@/components/pages/home/GetStarted';
import Hero from '@/components/pages/home/Hero';
import prisma from '@/lib/prisma';

const HomePage = async () => {
  const projects = await prisma.project.findMany();
  return (
    <div className="py-24 space-y-32">
      <pre>{JSON.stringify(projects, null, 2)}</pre>
      <Hero />
      <GetStarted />
    </div>
  );
};

export default HomePage;
