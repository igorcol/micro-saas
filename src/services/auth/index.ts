import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/nodemailer"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../database"
 
export const { 
  auth, 
  handlers:{GET,POST}
} = NextAuth({

  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
    newUser: '/App'
  },

  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER,
        port: Number(process.env.EMAIL_PORT),
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      },
      from: process.env.EMAIL_FROM
    })
  ],
  secret: process.env.EMAIL_SECRET
})