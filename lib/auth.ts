import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions, getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from './prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    error: '/feedback',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
        session.user.teams = token.teams;
        session.user.currentTeam = token.currentTeam;
      }

      return session;
    },

    async jwt({ token, user }: any) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
        include: {
          teams: {
            select: {
              id: true,
              slug: true,
              name: true,
            },
          },
          currentTeam: {
            select: {
              id: true,
              slug: true,
              name: true,
            },
          },
        },
      });
      if (!dbUser) {
        token.id = user!.id;
        return token;
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        image: dbUser.image,
        teams: dbUser.teams,
        currentTeam: dbUser.currentTeam,
        // spaces: dbUser.spaces,
        // currentSpace: dbUser.currentSpace,
        // hasCompletedSignUp: dbUser.hasCompletedSignUp,
      };
    },
    redirect() {
      return '/team';
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
};

export const getAuthSession = () => getServerSession(authOptions);

export const getAuthUser = async () => {
  const session = await getAuthSession();
  return session?.user;
};
