import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import  GoogleProvider  from "next-auth/providers/google";
import  jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";


export const authOptions: NextAuthOptions = {
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  })],

  // jwt: {
  //   encode: ({ secret, token }) =>{},
  //   decode: async({ secret, token }) =>{},
  // },

  theme: {
    colorScheme: "light",
    logo: "/logo.svg"
  },

  callbacks: {
    async signIn({ user }: { user: AdapterUser | User }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    },
  }

}