'use client';

import { assignCurrentTeam } from '@/lib/actions';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useEffect } from 'react';

const AssignCurrentTeam = () => {
  const segments = useSelectedLayoutSegments();
  const team = segments[0];
  useEffect(() => {
    console.log('FIRED', team);
    const execute = async () => {
      await assignCurrentTeam(team);
    };
    execute();
  }, [team]);
  return false;
};

export default AssignCurrentTeam;
