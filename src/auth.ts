import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { verifyAdminCredentials } from '@/lib/admin-auth';

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || 'una-trattoria-admin-secret-2026',
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Admin',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const username = String(credentials?.username ?? '').trim();
        const password = String(credentials?.password ?? '');

        if (!verifyAdminCredentials(username, password)) {
          return null;
        }

        return {
          id: 'admin',
          name: 'Milos',
          username,
          role: 'admin',
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userWithRole = user as typeof user & { role?: string };
        token.role = userWithRole.role ?? 'admin';
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        const sessionUser = session.user as typeof session.user & { role?: string };
        sessionUser.role = String(token.role ?? 'admin');
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
