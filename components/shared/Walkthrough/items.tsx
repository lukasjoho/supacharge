import {
  ArrowBigRight,
  Boxes,
  Braces,
  CalendarPlus,
  CheckCircle2,
  Code2,
  FileBarChart2,
  FileClock,
  GanttChartSquare,
  KanbanSquareDashed,
  LineChart,
  Slack,
  Webhook,
  Workflow,
} from 'lucide-react';

export const items = [
  {
    step: 1,
    label: 'Plan',
    title: (
      <>
        Create hypotheses. <br />
        Refine and schedule.
      </>
    ),
    description:
      'Coming up with a testable hypothesis sits at the very start of every experiment. Uplift supports in creating scientific hypothesis.',
    cta: 'Start Planning',
    imageUrl: '/image-plan.jpg',
    color: 'from-purple-600 to-purple-400',
    solidColor: 'purple-500',
    textColor: 'text-purple-500',
    highlights: [
      { icon: <KanbanSquareDashed />, label: 'Templates' },
      { icon: <GanttChartSquare />, label: 'Roadmap' },
      { icon: <CheckCircle2 />, label: 'Status Updates' },
    ],
    icon: <CalendarPlus className="w-4 md:w-6" />,
  },
  {
    step: 2,
    label: 'Deploy',
    title: <>Expose experiment variations in realtime with the Uplift API.</>,
    description:
      'Each experiment mappes one to one to a feature flag. This lets any client applications consume configurations in predictable and reliable ways.',
    cta: 'Start Deploying',
    imageUrl: '/image-api.jpg',
    color: 'from-amber-600 to-amber-400',
    solidColor: 'amber-500',
    textColor: 'text-amber-500',
    icon: <Code2 className="w-4 md:w-6" />,
    highlights: [
      { icon: <Braces />, label: 'Feature Flag API' },
      { icon: <Boxes />, label: 'Javascript SDK' },
      { icon: <Webhook />, label: 'Webhooks' },
    ],
  },
  {
    step: 3,
    label: 'Analyze',
    title: <>Metrics where they need to be.</>,
    description:
      'Your metrics are integrated into each and every experiment created. Either use the Supacharge analytics SDK or integrate your analytics tool of choice',
    cta: 'Start Analyzing',
    imageUrl: '/image-analytics.jpg',
    color: 'from-blue-600 to-blue-400',
    solidColor: 'blue-500',
    textColor: 'text-blue-500',
    icon: <LineChart className="w-4 md:w-6" />,
    highlights: [
      { icon: <FileClock />, label: 'Analyses Summaries' },
      { icon: <Workflow />, label: 'Tool Integration' },
    ],
  },
  {
    step: 4,
    label: 'Decide',
    title: <>Discuss and evaluate. Take next steps.</>,
    description:
      'An experiment is only as good as the actions taken based on the results. Uplift supports in making and documenting the right decisions based on the results of your experiments.',
    cta: 'Start Deciding',
    imageUrl: '/image-4.jpg',
    color: 'from-green-600 to-green-400',
    solidColor: 'green-500',
    textColor: 'text-green-500',
    icon: <ArrowBigRight className="w-4 md:w-6" />,
    highlights: [
      { icon: <FileBarChart2 />, label: 'Report Sharing' },
      { icon: <Slack />, label: 'Slack Integration' },
    ],
  },
];
