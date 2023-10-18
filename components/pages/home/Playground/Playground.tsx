import Container from '@/components/layout/Container';
import { Icons } from '@/components/shared/Icons';
import ScrollAnimationWrapper from '@/components/shared/ScrollAnimationWrapper';
import { cn } from '@/lib/utils';
import BarChart from './BarChart';
import DecisionMaker from './DecisionMaker';
import Flags from './Flags';
import GridItem from './GridItem';
import MiniTimeline from './MiniTimeline';
import Remote from './Remote';
import VariantSelector from './VariantSelector';

interface InteractiveLabelProps extends React.HTMLAttributes<HTMLDivElement> {}

const InteractiveLabel = ({ className, ...props }: InteractiveLabelProps) => (
  <div
    className={cn('flex items-center gap-1.5 text-pink-500 pb-1', className)}
  >
    <p className="text-xs">Interactive</p>
    <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
  </div>
);

const PlayAroundLabel = ({ className, ...props }: InteractiveLabelProps) => (
  <div
    className={cn(
      'flex flex-row lg:flex-col items-center gap-4 text-muted-foreground',
      className
    )}
  >
    <p className="font-gaegu text-xl lg:text-2xl text-pink-500">Play around</p>
    <Icons.curvedArrowConvex className="w-12 fill-pink-500/90 hidden lg:block" />
    <Icons.curvedArrowConcave className="w-12 fill-pink-500/90 lg:hidden translate-y-1" />
  </div>
);

const Playground = () => {
  return (
    <ScrollAnimationWrapper>
      <Container className="max-w-[900px] 2xl:max-w-[1000px] relative">
        <div className="absolute right-0 z-10 bg-gradient-to-r from-transparent to-background w-24 h-full"></div>
        <InteractiveLabel className="md:hidden absolute right-5 top-12 -translate-y-[100%] z-10" />
        <PlayAroundLabel className="md:hidden absolute left-3 top-12 -translate-y-[150%] z-10" />
        <div className="overflow-scroll md:overflow-visible -mx-3 px-6 py-12 -my-12 md:my-0 md:px-0 md:py-0 md:mx-0">
          <div className="min-w-[900px] md:min-w-[700px] relative border rounded-xl p-4 grid grid-cols-5 md:grid-cols-3 grid-rows-2 md:grid-rows-3 gap-4 shadow-[0_5px_60px_-30px_rgba(148,_163,_184,_0.7)] md:shadow-[0_0px_60px_-30px_rgba(148,_163,_184,_0.7)]">
            <InteractiveLabel className="hidden md:flex absolute right-2 top-0 -translate-y-[100%]" />

            <PlayAroundLabel className="hidden md:flex absolute left-0 top-0 -translate-x-3 lg:-translate-x-[100%] xl:-translate-x-[150%] -translate-y-[160%] lg:-translate-y-[60%]  z-10" />
            <GridItem
              className="row-start-1 col-start-1 col-span-2"
              title="Schedule experiments"
            >
              <MiniTimeline />
            </GridItem>
            <GridItem
              className="row-start-1 col-start-4 md:col-start-3 col-span-2 md:col-span-1 row-span-2"
              title="Expose flags"
            >
              <Flags />
            </GridItem>
            <GridItem
              className="row-start-2 col-start-1 row-span-1 md:row-span-1 md:aspect-square"
              title="Make decisions"
            >
              <DecisionMaker />
            </GridItem>
            <GridItem
              className="row-start-2 col-start-3 row-span-1 md:col-start-1 md:row-start-3 md:aspect-square"
              title="Launch remotely"
            >
              <Remote />
            </GridItem>
            <GridItem
              className="col-span-1 row-span-1 col-start-3 md:col-start-2 row-start-1 md:row-start-2 md:aspect-square"
              title="Analyse results"
            >
              <BarChart />
            </GridItem>
            <GridItem
              className="col-start-2 row-start-2 md:row-start-3 col-span-1 md:col-span-2"
              title="Define traffic allocation"
            >
              <VariantSelector />
            </GridItem>
          </div>
        </div>
      </Container>
    </ScrollAnimationWrapper>
  );
};

export default Playground;
