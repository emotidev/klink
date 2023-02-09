import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_ID as string,
      clientSecret: process.env.NEXTAUTH_GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database",
  },
});
