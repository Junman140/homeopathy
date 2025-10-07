import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { nextCookies } from "better-auth/next-js"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  user: {
    additionalFields: {
      firstName: {
        type: "string",
        required: false,
      },
      lastName: {
        type: "string", 
        required: false,
      },
      phone: {
        type: "string",
        required: false,
      },
      program: {
        type: "string",
        required: false,
      },
      qualifications: {
        type: "string",
        required: false,
      },
      studentId: {
        type: "string",
        required: false,
      },
      enrollmentStatus: {
        type: "string",
        required: false,
      },
    },
  },
  trustedOrigins: [
    "http://localhost:3000",
    "https://localhost:3000",
  ],
  baseURL: process.env.BETTER_AUTH_URL ,
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [nextCookies()] // make sure this is the last plugin in the array
})

export type Session = typeof auth.$Infer.Session
export type User = typeof auth.$Infer.Session.user
