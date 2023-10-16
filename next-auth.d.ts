import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      currentTeam: {
        id: string;
        slug: string;
        name: string;
      };
      teams: {
        id: string;
        slug: string;
        name: string;
      }[];
    } & DefaultSession['user'];
  }
}
