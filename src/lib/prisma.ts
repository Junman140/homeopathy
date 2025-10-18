import { PrismaClient } from '@prisma/client'

// Force TypeScript to reload Prisma types

// Updated to include new student models AND course models - regenerated client with types

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
