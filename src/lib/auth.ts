import { compare } from "bcryptjs";
import type { DefaultSession, NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      role?: AuthUserRole;
      organizationId: string;
    };
  }

  interface User {
    role?: AuthUserRole;
    organizationId: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: AuthUserRole;
    organizationId?: string;
  }
}

export type AuthUserRole = "SUPER_ADMIN" | "HR" | "MANAGER" | "EMPLOYEE";

export const authConfig = {
  providers: [],
  sessionStrategy: "jwt" as const,
  pages: {
    signIn: "/login",
  },
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
          include: { role: true },
        });

        if (!user) {
          return null;
        }

        const isValidPassword = await compare(credentials.password, user.passwordHash);
        if (!isValidPassword) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          role: user.role.name,
          organizationId: user.organizationId,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: AuthUserRole }).role ?? "EMPLOYEE";
        token.organizationId = (user as { organizationId?: string }).organizationId;
      }

      return token as JWT;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? "";
        session.user.role = (token.role as AuthUserRole) ?? "EMPLOYEE";
        session.user.organizationId = token.organizationId ?? "";
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
