import { Home, Users } from 'lucide-react';

export const settingsPages = [
  {
    label: 'General',
    href: '/settings/general',
    icon: <Home className="w-5 h-5" />,
  },
  {
    label: 'Members',
    href: '/settings/members',
    icon: <Users className="w-5 h-5" />,
  },
];
