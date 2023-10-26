import { useSelectedLayoutSegments } from 'next/navigation';

export function useTeamName() {
  return useSelectedLayoutSegments()[2];
}
