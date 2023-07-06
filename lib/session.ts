import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import  GoogleProvider  from "next-auth/providers/google";
import  jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { SessionInterface, UserProfile } from "@/common.types";
import { createUser, getUser } from "./actions";


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
      try {
        const userExists = await getUser(user?.email as string) as { user: UserProfile};

        if (!userExists.user) {
          await createUser(
            user.name as string,
            user.email as string,
            user.image as string
          )
        }
        
        return true
      } catch (error: any) {
        return false;
        
      }
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    async session({ session, user, token }) {
      return session
    },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token
    // },
  }

}


export const getCurrentUser = async()=>(await getServerSession() as SessionInterface)