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
        // session.user.hasCompletedSignUp = token.hasCompletedSignUp;
        // session.user.spaces = token.spaces;
        // session.user.currentSpace = token.currentSpace;
      }
      //   const connectedUser = await prisma.user.update({
      //     where: {
      //       email: token.email,
      //     },
      //     data: {
      //       spaces: {
      //         connect: {
      //           id: 'cljddlzin0000w3tz7bfcl41d',
      //         },
      //       },
      //     },
      //   });

      return session;
    },

    async jwt({ token, user }: any) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
        // include: {
        //   spaces: true,
        //   currentSpace: true,
        // },
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
        // spaces: dbUser.spaces,
        // currentSpace: dbUser.currentSpace,
        // hasCompletedSignUp: dbUser.hasCompletedSignUp,
      };
    },
    redirect() {
      return '/space';
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
};

export const getAuthSession = () => getServerSession(authOptions);
