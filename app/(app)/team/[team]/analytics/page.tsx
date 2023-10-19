import Container from '@/components/layout/Container';
import Title from '@/components/shared/Title';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CalendarCheck, Group } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <Container className="max-w-[1200px] space-y-4 py-12">
      <Title className="text-3xl">Experiments Conducted</Title>
      <div className="aspect-video flex justify-center gap-8 relative items-end border rounded-lg">
        <Button
          variant="outline"
          className="flex gap-1.5 items-center absolute left-4 top-4"
        >
          Since Oct 09, 23
          <CalendarCheck className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-1.5 absolute top-4 right-4"
        >
          By team
          <Group className="w-5 h-5" />
        </Button>
        <Bar
          className="bg-neutral-500/40 border-neutral-400"
          team="Website"
          number={12}
        />
        <Bar
          className="bg-green-500/40 border-green-400 "
          team="Checkout"
          number={4}
        />
        <Bar
          className="bg-violet-500/40 border-violet-400 "
          team="Onboarding"
          number={7}
        />
      </div>
    </Container>
  );
};

export default AnalyticsPage;

interface BarProps extends React.HTMLAttributes<HTMLDivElement> {
  team: string;
  number: number;
}

const Bar = ({ className, team, number, ...props }: BarProps) => {
  return (
    <div
      className={cn(
        'relative border-2 border-b-0 rounded-t-lg w-32',
        className
      )}
      style={{
        height: `${(number * 100) / (12 * 1.25)}%`,
      }}
    >
      <div className="text-primary text-2xl text-center absolute bottom-2 w-full font-semibold">
        {number}
      </div>
      <div className="absolute bottom-0 text-center w-full font-medium text-muted-foreground translate-y-[150%]">
        {team}
      </div>
    </div>
  );
};
