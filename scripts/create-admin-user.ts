import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createAdminUser() {
  try {
    const adminEmail = process.argv[2] || 'godswillitina@gmail.com'
    const adminName = process.argv[3] || 'Admin User'
    
    const existingAdmin = await prisma.adminUser.findUnique({
      where: { email: adminEmail }
    })
    
    if (existingAdmin) {
      console.log(`Admin user with email ${adminEmail} already exists`)
      return
    }
    
    const adminUser = await prisma.adminUser.create({
      data: {
        email: adminEmail,
        name: adminName,
        firstName: adminName.split(' ')[0],
        lastName: adminName.split(' ').slice(1).join(' '),
        isActive: true
      }
    })
    
    console.log(`Admin user created successfully:`)
    console.log(`Email: ${adminUser.email}`)
    console.log(`Name: ${adminUser.name}`)
    console.log(`ID: ${adminUser.id}`)
    
  } catch (error) {
    console.error('Error creating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdminUser()
