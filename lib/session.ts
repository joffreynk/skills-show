import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import  GoogleProvider  from "next-auth/providers/google";
import  GitHubProvider  from "next-auth/providers/github";
import  jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import { SessionInterface, UserProfile } from "@/common.types";
import { createUser, getUser } from "./actions";


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  }),
  GitHubProvider({
    clientId: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!,
  })
],
  secret: process.env.AUTH_SECRET!,

  jwt: {
    encode: ({ secret, token }) =>{
      const encodeToken = jsonwebtoken.sign({
        ...token,
        issuer: 'grafbase',
        exp: Math.floor(Date.now() / 1000) + 24*3600,
      }, secret)
      return encodeToken
    },
    decode: async({ secret, token }) =>{
      const decodeToken = jsonwebtoken.verify( token!, secret ) as JWT
      return decodeToken
    },
  },

  theme: {
    colorScheme: "light",
    logo: "/logo.svg"
  },

  callbacks: {
    async signIn({ user }: { user: AdapterUser | User }) {
      try {
        const userExists = await getUser(user?.email as string) as { user: UserProfile};

        if (!userExists?.user) {
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

    async session({ session}) {
      const email = session?.user?.email as string
      
      try {
        const data = await getUser(email) as { user?: UserProfile};
        const newSession = {
          ...session,
          user: {
            ...session.user,
            ...data?.user,
          }
        }

        return newSession;
      } catch (error) {
        return session
      }
    },
  }

}

export const getCurrentUser = async()=>{
  const session = await getServerSession() as SessionInterface;
  return session
}