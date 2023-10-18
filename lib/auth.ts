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
    async signIn({ user, account, profile, email, credentials }: any) {
      return true;
    },
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
      let dbUser;
      dbUser = await prisma.user.findFirst({
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

      const hasNoTeams = dbUser?.teams.length === 0;
      if (hasNoTeams) {
        dbUser = await prisma.user.update({
          where: {
            email: token.email,
          },
          data: {
            teams: {
              connect: {
                id: 'clnrf4dzp0000hniqjt0jl2fw',
              },
            },
            currentTeam: {
              connect: {
                id: 'clnrf4dzp0000hniqjt0jl2fw',
              },
            },
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
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        image: dbUser.image,
        teams: dbUser.teams,
        currentTeam: dbUser.currentTeam,
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
