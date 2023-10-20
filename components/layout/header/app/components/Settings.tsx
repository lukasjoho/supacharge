'use client';

import { Settings } from 'lucide-react';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

const SettingsLink = () => {
  const team = useSelectedLayoutSegments()[1];
  return (
    <Link href={`/team/${team}/settings/general`}>
      <Settings className="w-5 h-5 text-muted-foreground transition duration-150 hover:text-primary" />
    </Link>
  );
};

export default SettingsLink;
